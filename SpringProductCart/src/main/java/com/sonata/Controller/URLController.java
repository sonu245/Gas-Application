package com.sonata.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Service.Impl.ValidatePin;





@CrossOrigin(origins="*", allowedHeaders="*")
@RestController
@RequestMapping("api/reg")
public class URLController {
	@Autowired
	private ValidatePin pinService;
	
	@ResponseBody
	@GetMapping("/register")
    public List<String> getAllPin() {
		List<String> li= pinService.getAllPin();
		return li;
	}
	
}
