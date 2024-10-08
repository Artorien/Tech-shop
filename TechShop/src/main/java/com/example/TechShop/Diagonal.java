package com.example.TechShop;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "diagonals")
public class Diagonal {
    @Id
    private Integer id;
    private String diagonal;

    public Diagonal() {

    }

    public Diagonal(String diagonal) {
        this.diagonal = diagonal;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDiagonal() {
        return this.diagonal;
    }

    public void setDiagonal(String diagonal) {
        this.diagonal = diagonal;
    }
}
