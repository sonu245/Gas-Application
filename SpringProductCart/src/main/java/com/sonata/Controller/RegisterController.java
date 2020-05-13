package com.sonata.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Service.Impl.LoginService;
import com.sonata.Model.Login;
import com.sonata.Model.RegisterAddress;
import com.sonata.Service.RegisterService;

@RestController 
	@CrossOrigin(origins = "*",allowedHeaders="*")

	public class RegisterController {
		
		
		@Autowired
		RegisterService registerService;
		
		 @Autowired
		 private LoginService  loginservice;
		
		 	 @PostMapping("/register")
				public String createNewRegister(@RequestBody RegisterAddress reg) {
			
				registerService.save(reg.address, reg.register);
				
				return "Hi "+reg.register.getCname()+" registered successfully";
		      
		          
		 	 	}
		 	 
		 	@RequestMapping(value="/login",method=RequestMethod.GET)
		 	public List<Login> getUser(){
		 	return loginservice.getALLUser();
		 	}

}
