package com.example.TechShop;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "related_products")
public class RelatedProducts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany
    private List<Image> images;
    @OneToMany
    private List<Memory> memory;
    @OneToMany
    private List<Color> colors;
    @OneToMany
    private List<Diagonal> diagonals;
    @OneToMany
    private List<Processor> processors;

    public RelatedProducts() {

    }

    public RelatedProducts(String name) {
        this.name = name;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Image> getImages() {
        return this.images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }

    public List<Memory> getMemory() {
        return this.memory;
    }

    public void setMemory(List<Memory> memory) {
        this.memory = memory;
    }

    public List<Color> getColors() {
        return this.colors;
    }

    public void setColors(List<Color> colors) {
        this.colors = colors;
    }

    public List<Diagonal> getDiagonals() {
        return this.diagonals;
    }

    public void setDiagonals(List<Diagonal> diagonals) {
        this.diagonals = diagonals;
    }

    public List<Processor> getProcessors() {
        return this.processors;
    }

    public void setProcessors(List<Processor> processors) {
        this.processors = processors;
    }
}
