package com.sonata.Service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.sonata.Model.Product;
import com.sonata.Model.ProductList;
import com.sonata.Repository.ProductListRepository;
import com.sonata.Service.ProductListService;

@Service
public class ProductListServiceImpl implements ProductListService{
	
	@Autowired
	private ProductListRepository productListRepository;



	@Override
	public List<ProductList> getAllProducts() {
		List<ProductList> pl = productListRepository.findAll();
		return pl;
	}

	@Override
	public Optional<ProductList> getProduct(Long id) {
		Optional<ProductList> pro = productListRepository.findById(id);
		return pro;
	}

	
}
