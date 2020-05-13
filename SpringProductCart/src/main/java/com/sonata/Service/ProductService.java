package com.sonata.Service;

import java.util.List;
//import java.util.Optional;

import com.sonata.Model.Product;

public interface ProductService {

		Product insert(Product pro);
		
		List<Product> getAllProducts();
		
		void delete(Long id);
		
}
