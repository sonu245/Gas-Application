package com.sonata.Service.Impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sonata.DAO.LoginInf;
//import com.sonata.DAO.LoginInf;
import com.sonata.DaoImpl.DbConnection;
import com.sonata.Model.Login;
import com.sonata.Model.Register;
@Service
public class LoginService implements LoginInf {
DbConnection db = new DbConnection();
	
	@Override
	public  List<Login>  getALLUser(){
		
		
		List<Login> reg = new ArrayList<>();
		try {
			DbConnection db = new DbConnection();
			PreparedStatement ps = db.getConnection().prepareStatement("select * from register");
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
				String cname =rs.getString(2);
				String cpassword=rs.getString(6);
				
				Login r1 = new Login();
				r1.setCname(cname);			
				r1.setCpassword(cpassword);		
				reg.add(r1);
				
				
			}
			
		}catch(SQLException e) {e.printStackTrace();}
		return reg;
	}


}
