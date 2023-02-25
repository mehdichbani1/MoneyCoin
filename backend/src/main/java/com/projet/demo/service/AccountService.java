package com.projet.demo.service;

import com.projet.demo.model.Account;
import com.projet.demo.model.Budget;
import com.projet.demo.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> findAll() {
        return accountRepository.findAll();
    }
    public Optional<Account> check(String email,String password) {
        return accountRepository.findByEmailAndPassword(email,password);
    }

    public Optional<Account> findById(Long id) {
        return accountRepository.findById(id);
    }
    public Account save(Account account) {
        account.setBudget(new Budget());
        return accountRepository.save(account);
    }
    public void deleteById(Long id) {
        accountRepository.deleteById(id);
    }
}
