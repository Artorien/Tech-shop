package com.example.TechShop.Repository;

import com.example.TechShop.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    @Query("SELECT p FROM Product p WHERE p.productToken = :productToken")
    Page<Product> getAllByToken(@Param("productToken") String productToken, PageRequest pageRequest);

    @Query("SELECT p FROM Product p WHERE "
            + "(:models IS NULL OR p.model IN :models) AND "
            + "(:memory IS NULL OR p.memory IN :memory) AND"
            + "(:diagonal IS NULL OR p.diagonal IN :diagonal) AND"
            + "(p.productToken = :productToken)")

    Page<Product> findByCriteria(
            @Param("models") List<String> models,
            @Param("memory") List<String> memory,
            @Param("diagonal") List<String> diagonal,
            @Param("productToken") String productToken,
            Pageable pageable
    );
}
