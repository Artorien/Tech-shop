package com.example.TechShop.Repository;

import com.example.TechShop.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
