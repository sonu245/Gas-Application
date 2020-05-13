package com.sonata.Service.Impl;


import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sonata.DaoImpl.DbConnection;
import com.sonata.Model.Address;

@Service
public class ValidatePin {
	
DbConnection db = new DbConnection();
	
	
      public List<String> getAllPin()
	  {
		
		List<String> li=new ArrayList<String>();
		try
		{
			
			PreparedStatement cs = db.getConnection().prepareStatement ("select pincode from Address");
			ResultSet rs=cs.executeQuery();
			while(rs.next())
			{ 
				
				int pincode=rs.getInt("pincode");
				 String id=""+pincode;
				 
				li.add(id);
				
				
				
			}
			
		}
			catch (SQLException e) {
				e.printStackTrace();
				// TODO: handle exception
			}
		return li;
		}


}

