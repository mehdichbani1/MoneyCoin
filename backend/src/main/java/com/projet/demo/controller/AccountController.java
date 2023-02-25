package com.projet.demo.controller;

import com.projet.demo.model.Account;
import com.projet.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping
    public List<Account> getAllAccounts() {
        return accountService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccountById(@PathVariable Long id) {
        Optional<Account> account = accountService.findById(id);
        if (!account.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account.get());
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@RequestBody Account account) {
        Account savedAccount = accountService.save(account);
        return ResponseEntity.ok(savedAccount);
    }
    @GetMapping("/check/{email}/{password}")
    public ResponseEntity<Account> check(@PathVariable String email,@PathVariable String password) {
        Optional<Account> savedAccount = accountService.check(email,password);
        if(savedAccount.isPresent()){
            return ResponseEntity.ok(savedAccount.get());
        }
        return ResponseEntity.badRequest().body(new Account());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Account> updateAccount(@PathVariable Long id, @RequestBody Account account) {
        if (!accountService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        account.setId(id);
        Account updatedAccount = accountService.save(account);
        return ResponseEntity.ok(updatedAccount);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAccount(@PathVariable Long id) {
        if (!accountService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        accountService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
