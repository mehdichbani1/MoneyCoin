package com.projet.demo.controller;

import com.projet.demo.model.Transaction;
import com.projet.demo.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public List<Transaction> getAllTransactions() {
        return transactionService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        Optional<Transaction> transaction = transactionService.findById(id);
        if (!transaction.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(transaction.get());
    }

    @PostMapping
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        Transaction savedTransaction = transactionService.save(transaction);
        return ResponseEntity.ok().body(savedTransaction);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Transaction> updateTransaction(@PathVariable Long id, @RequestBody Transaction transaction) {
        if (!transactionService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        transaction.setId(id);
        Transaction updatedTransaction = transactionService.save(transaction);
        return ResponseEntity.ok(updatedTransaction);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        if (!transactionService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        transactionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
