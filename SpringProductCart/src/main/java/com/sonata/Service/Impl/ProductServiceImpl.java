package com.sonata.Service.Impl;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sonata.Model.Product;
import com.sonata.Repository.ProductRepository;
import com.sonata.Service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;


	@Override
	public Product insert(Product pro) {
		Product product = productRepository.save(pro);
		return product;
	}

	@Override
	public List<Product> getAllProducts() {
		List<Product> pl = productRepository.findAll();
		return pl;
	}

	@Override
	public void delete(Long id) {
		productRepository.deleteById(id);
		
	}
	
	
	
	

}
