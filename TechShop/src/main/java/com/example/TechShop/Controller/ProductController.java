package com.example.TechShop.Controller;

import com.example.TechShop.Product;
import com.example.TechShop.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/all")
    public Page<Product> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                        @RequestParam(defaultValue = "9") int size,
                                        @RequestParam() String productToken) {

        System.out.println("Token: " + productToken);

        return productService.getAllProducts(page, size, productToken);
    }

    @GetMapping("/category")
    public Page<Product> categorySorting(@RequestParam(required = false) List<String> model,
                                         @RequestParam(required = false) List<String> memory,
                                         @RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "9") int size,
                                         @RequestParam(required = false, defaultValue = "asc") String price,
                                         @RequestParam() String productToken,
                                         @RequestParam(required = false) List<String> diagonal) {
        return productService.getSortedCategories(page, size, memory, model, price, productToken, diagonal);
    }
}
