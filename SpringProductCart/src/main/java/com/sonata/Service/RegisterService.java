package com.sonata.Service;

import java.util.List;

import com.sonata.Model.Address;
import com.sonata.Model.Register;

public interface RegisterService {

	public abstract void save(Address address, Register register);
	List<Object> getAllEmployees();
	
	
}
