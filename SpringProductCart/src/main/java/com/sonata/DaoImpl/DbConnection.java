package com.sonata.DaoImpl;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;



public class DbConnection {
	
	Connection connection;

	public Connection getConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
						
			connection  =  (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/gasdatabase", "root", "admin@123");
		}catch(ClassNotFoundException e) {System.out.println("Exception");}
		catch(SQLException s) {s.printStackTrace();}
		return connection;
		}
	public void closeConnection() {
		try {
			if(connection!=null){
				connection.close();
			}
		}catch(SQLException sqle) {sqle.printStackTrace();}
	}
	

}
