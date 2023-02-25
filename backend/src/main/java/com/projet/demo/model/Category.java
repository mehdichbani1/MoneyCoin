package com.projet.demo.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;



import java.util.List;


@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Transient
    private double amount;

    @ManyToOne
    @JsonBackReference
    private Budget budget;


    @OneToMany(mappedBy = "category",cascade = CascadeType.MERGE)
    @JsonManagedReference
    private List<Transaction> transactions;

    public Category(String name, double amount) {
        this.name = name;
        this.amount = amount;
    }

    public Category(String name) {
        this.name = name;
    }

    public Category() {
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getAmount() {
        if(this.transactions!=null)
        if(this.transactions.size()>0)
        return this.transactions.stream().map(tr->tr.getAmount()*(tr.getTypeTransaction()==TypeTransaction.RETRAIT?-1:1))
        .reduce((i,j)->i+j).get();
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Budget getBudget() {
        return budget;
    }

    public void setBudget(Budget budget) {
        this.budget = budget;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public List<Transaction> getTransactions() {

        return transactions;
    }


}
