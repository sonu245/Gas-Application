package com.sonata.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.sonata.Model.ProductList;
import com.sonata.Service.ProductListService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/productlist")

public class ProductListController {
	
	
	
	@Autowired
	 private ProductListService productListService;
	
	@ResponseBody
	@GetMapping("/getproductlist")
	public List<ProductList> getAllProducts(){
		List<ProductList> pl = productListService.getAllProducts();
		return pl;
	}
	
	@ResponseBody
	@GetMapping("/getproduct/{id}")
	public Optional<ProductList> getproductData(@PathVariable Long id){
		Optional<ProductList> proData = productListService.getProduct(id);
		return proData;
	}
	
}

