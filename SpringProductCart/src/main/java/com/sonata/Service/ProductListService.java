package com.sonata.Service;

import java.util.List;
import java.util.Optional;

//import com.sonata.Model.Product;
import com.sonata.Model.ProductList;

public interface ProductListService {

		
		List<ProductList> getAllProducts();
		
		Optional<ProductList> getProduct(Long id);
		
		
}
