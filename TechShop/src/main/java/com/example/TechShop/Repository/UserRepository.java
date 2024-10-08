package com.example.TechShop.Repository;

import com.example.TechShop.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findUserByEmail(String email);
    @Query("SELECT u FROM User u WHERE u.token = :token")
    User findUserByToken(@Param("token")String token);
}
