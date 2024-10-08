package com.example.TechShop;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
    @Id
    private int id;
    private String name;
    private String color;
    private String memory;
    private String model;
    private String processor;
    private String image;
    private String diagonal;
    private String productToken;
    private int price;

    public Product() {

    }

    public Product(
            int id,
            String name,
            String color,
            String memory,
            String model,
            String processor,
            String image,
            String diagonal,
            String productToken,
            int price) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.memory = memory;
        this.model = model;
        this.processor = processor;
        this.image = image;
        this.diagonal = diagonal;
        this.productToken = productToken;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMemory() {
        return memory;
    }

    public void setMemory(String memory) {
        this.memory = memory;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public String getImage()
    {
        return this.image;
    }

    public void setImage(String image)
    {
        this.image = image;
    }

    public String getDiagonal()
    {
        return this.diagonal;
    }

    public void setDiagonal(String diagonal)
    {
        this.diagonal = diagonal;
    }

    public int getPrice()
    {
        return this.price;
    }

    public void setPrice(int price)
    {
        this.price = price;
    }

    public String getProductToken()
    {
        return this.productToken;
    }

    public void setProductToken(String productToken)
    {
        this.productToken = productToken;
    }
}
