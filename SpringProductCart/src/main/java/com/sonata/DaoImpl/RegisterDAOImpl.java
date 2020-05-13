package com.sonata.DaoImpl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sonata.DAO.RegisterDAO;
import com.sonata.DaoImpl.DbConnection;
import com.sonata.Model.Address;
import com.sonata.Model.Register;

@Service
public class RegisterDAOImpl implements RegisterDAO {
	
	 int row=0;
	    int row1=0;
	    
		DbConnection db=new DbConnection();
		ResultSet resultset;
		Address address;
		Register register;
		ResultSet generatedKeys;
		int sectionID ;

	@Override
	public void save(Address address, Register register) {
		
try {
			
			address=(Address)address;
			register =(Register)register;
			PreparedStatement cs1=db.getConnection().prepareStatement
					("Insert into Address values(?,?,?,?,?)",Statement.RETURN_GENERATED_KEYS);
			//cs1.setInt(1, address.getAid());
			cs1.setInt(1, 0);
			cs1.setString(2, address.getState());
			cs1.setString(3, address.getDistrict());
			cs1.setString(4,address.getLocality());
			cs1.setInt(5, address.getPincode());
	
			row1=cs1.executeUpdate();
			 generatedKeys = cs1.getGeneratedKeys();
			if(generatedKeys.next()) {
				 sectionID = generatedKeys.getInt(1);
			}
			else {
				throw new SQLException("No generated section ID returned");
			}
			System.out.println("Address is inserted: "+row1);
			
			
			PreparedStatement cs=db.getConnection().prepareStatement
					("insert into Register values(?,?,?,?,?,?,?,?)");
			cs.setInt(1, 0);
			cs.setString(2, register.getCname());
			cs.setInt(3, register.getAadhar());
			cs.setString(4,register.getCemail());
			cs.setInt(5,register.getCphone());
			cs.setString(6,register.getCpassword());
			cs.setString(7,register.getGasCategory());
		    cs.setObject(8, sectionID);
			
			row=cs.executeUpdate();
			 
			System.out.println("data is inserted"+row);
			
			db.closeConnection();
				
			
		}catch(SQLException e) {e.printStackTrace();}
		finally {
			if(generatedKeys!=null) {
				try {
					generatedKeys.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		 
	}

@Override
	public List<Object> getAllEmployees() {
		List l1 =new  ArrayList<Register>();
		List l2=new ArrayList<Address>();
		//List l3=new ArrayList<Object>();
		
		try
		{
			PreparedStatement ps = (PreparedStatement) db.getConnection().prepareStatement("SELECT * FROM Register");
			ResultSet rs=ps.executeQuery();
			
			PreparedStatement ps1=db.getConnection().prepareStatement("Select * from Address");
			ResultSet rs1=ps1.executeQuery();
		
		while(rs.next() && rs1.next())
		{ 
			 Register register= new Register();
			 Address address=new Address();
			 int aid=rs1.getInt(1);
			 
			 int cid=rs.getInt(1);
			 String cname=rs.getString(2);
			 int aadhar=rs.getInt(3);
			 String cemail=rs.getString(4);
			 int cphone=rs.getInt(5);
			 String cpassword=rs.getString(6);
			 String gasCategory=rs.getString(7);
			 Object addr=rs.getObject(8);
			// int aid=rs.getString(8);
			 
			 register.setCid(cid);
			 register.setCname(cname);
			 register.setAadhar(aadhar);
			 register.setCemail(cemail);
			 register.setCphone(cphone);
			 register.setCpassword(cpassword);
			 register.setGasCategory(gasCategory);
			 address.setAid(aid);
			 
			
				
				String state=rs1.getString(2);
				String district=rs1.getString(3);
				String locality=rs1.getString(4);
				int pincode =rs1.getInt(5);
				
				address.setAid(aid);
				address.setState(state);
				address.setDistrict(district);
				address.setLocality(locality);
				address.setPincode(pincode);
				
				l1.add(register);
				
				l2.add(address);
			
			
			
		}
		
		
	}
		catch (SQLException e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		
		
		
		l1.addAll(l2);
		return l1;
	}

}
