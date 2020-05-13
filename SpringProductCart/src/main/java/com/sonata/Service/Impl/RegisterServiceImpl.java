package com.sonata.Service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sonata.DAO.RegisterDAO;
import com.sonata.Model.Address;
import com.sonata.Model.Register;
import com.sonata.Service.RegisterService;

@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
	RegisterDAO registerDao;
	
	@Override
	public void save(Address address, Register register) {		
		registerDao.save(address, register);
		
	}

	@Override
	public List<Object> getAllEmployees() {
		
		return registerDao.getAllEmployees();
	}

}
