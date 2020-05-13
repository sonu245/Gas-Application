package com.sonata.DAO;

import java.util.List;

import com.sonata.Model.Address;
import com.sonata.Model.Register;

public interface RegisterDAO {
	
	public abstract void save(Address address, Register register);
	 public List<Object> getAllEmployees();
}
