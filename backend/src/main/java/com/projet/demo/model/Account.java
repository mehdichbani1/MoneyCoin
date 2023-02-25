package com.projet.demo.model;


import lombok.*;

import javax.persistence.*;

@Entity

public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    private String email;

    private String password;

    private String phone;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "budget_id")
    private Budget budget;





    public Account(String name, String email, String password, String phone) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }



    public Account() {
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



    public String getPhone() {
        return phone;
    }



    public void setPhone(String phone) {
        this.phone = phone;
    }



    public Budget getBudget() {
        return budget;
    }



    public void setBudget(Budget budget) {
        if(this.getBudget()==null)
        {
            this.budget = budget;
        }
        else if(this.getBudget().getCategories().size()==0){
            this.budget = budget;
        }
    }

}
