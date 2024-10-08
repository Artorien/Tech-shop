package com.example.TechShop.Service;

import com.example.TechShop.Product;
import com.example.TechShop.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Page<Product> getAllProducts(int page, int size, String token) {

        return productRepository.getAllByToken(token, PageRequest.of(page, size));
    }

    public Page<Product> getSortedCategories(int page,
                                             int size,
                                             List<String> selectedMemory,
                                             List<String> model,
                                             String price,
                                             String token,
                                             List<String> selectedDiagonal) {
        List<String> models = model == null || model.isEmpty() ? null : model;
        List<String> memory = selectedMemory == null || selectedMemory.isEmpty() ? null : selectedMemory;
        List<String> diagonal = selectedDiagonal == null || selectedDiagonal.isEmpty() ? null : selectedDiagonal;

        Sort sort = Sort.by("price");

        if ("asc".equalsIgnoreCase(price)) {
            sort = sort.ascending();
        } else if ("desc".equalsIgnoreCase(price)) {
            sort = sort.descending();
        }

        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Product> products = productRepository.findByCriteria(models, memory, diagonal, token, pageable);
        List<Product> listedProducts = new ArrayList<>(products.getContent());

        return new PageImpl<>(listedProducts, pageable, products.getTotalElements());
    }
}
