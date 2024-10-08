package com.example.TechShop;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "processors")
public class Processor {
    @Id
    private Integer id;
    private String processor;

    public Processor() {

    }

    public Processor(String processor) {
        this.processor = processor;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProcessor() {
        return this.processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }
}
