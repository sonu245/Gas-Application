package com.sonata.Controller;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.Model.Product;
//import com.sonata.Model.ProductList;
import com.sonata.Service.ProductService;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("api/product")
public class ProductController {
	

	
	
	@GetMapping("/welcome")
	public String welcome() {
		System.out.println("welcome");
		return "Welcome to Java";
	}
	
	@Autowired
	 private ProductService productService;
	
	@ResponseBody
	@PostMapping("/addtocart")
	public Product addToCart(@RequestBody Product pro) {
		Product product = productService.insert(pro);
		return product;
		
	}
	
	@ResponseBody
	@GetMapping("/getproduct")
	public List<Product> getAllProducts(){
		List<Product> pl = productService.getAllProducts();
		return pl;
	}
	
	@ResponseBody
//	@DeleteMapping()
	@RequestMapping(value = "/deleteproid/{id}",method = RequestMethod.GET)
	public String deleteProduct(@PathVariable Long id) {
		productService.delete(id);
		return "Product has been deleted";
	}
	

}
