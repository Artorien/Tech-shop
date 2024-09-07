package com.example.TechShop;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    private Integer id;
    private String email;
    private String password;
    @OneToMany
    private List<Product> favouriteItems;

    public User() {

    }

    public User(
            Integer id,
            String email,
            String password) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.favouriteItems = new ArrayList<>();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Product> getFavouriteItems() {
        return favouriteItems;
    }

    public void setFavouriteItems(List<Product> favouriteItems) {
        this.favouriteItems = favouriteItems;
    }
}
