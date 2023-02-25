package com.projet.demo;

import com.projet.demo.model.Account;
import com.projet.demo.model.Budget;
import com.projet.demo.service.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication {
	@Autowired
	public AccountService ac;

    @Bean
    void CommandLineRunner() {
        // Account account = new Account("mehdi", "test", "test", "0764654321");
        // Budget budget = new Budget(0,"abdo");
        // account.setBudget(budget);
        // ac.save(account);
        // System.out.println();
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}
