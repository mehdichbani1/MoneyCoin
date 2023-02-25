package com.projet.demo.repository;

import com.projet.demo.model.Account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,Long> {
    Optional<Account> findByEmailAndPassword(String email,String password);
}
