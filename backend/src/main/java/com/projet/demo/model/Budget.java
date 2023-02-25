package com.projet.demo.model;




import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

@Entity
public class Budget {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Transient
    private double amount;

    private String name;

   
    @OneToMany(cascade=CascadeType.MERGE,mappedBy = "budget")
    @JsonManagedReference
    private List<Category> categories;



    public Budget(double amount,String name) { 
        this.amount = amount;
        this.name = name;
    }
    public Budget() {
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public double getAmount() {
        if(this.getCategories()!=null)
        if(this.getCategories().size()>0)
        return this.getCategories().stream().map(cat->cat.getAmount())
        .reduce((i,j)->i+j).get();
        return amount;
    }
    public void setAmount(double amount) {
        this.amount = amount;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Category> getCategories() {
        return categories;
    }
    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }


}
