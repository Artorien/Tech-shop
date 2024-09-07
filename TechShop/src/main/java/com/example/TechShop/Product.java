package com.example.TechShop;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {
    @Id
    private Integer id;
    private String name;
    private String color;
    private Integer memory;
    private String model;
    private String processor;

    public Product() {

    }

    public Product(
            Integer id,
            String name,
            String color,
            Integer memory,
            String model,
            String processor) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.memory = memory;
        this.model = model;
        this.processor = processor;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

    public Integer getMemory() {
        return memory;
    }

    public void setMemory(Integer memory) {
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
}
