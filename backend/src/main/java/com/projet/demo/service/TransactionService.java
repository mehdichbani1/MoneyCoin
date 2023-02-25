package com.projet.demo.service;

import com.projet.demo.model.Budget;
import com.projet.demo.model.Category;
import com.projet.demo.model.Transaction;
import com.projet.demo.model.TypeTransaction;
import com.projet.demo.repository.CategoryRepository;
import com.projet.demo.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service

public class TransactionService {
    @Autowired private TransactionRepository transactionRepository;
    @Autowired private CategoryRepository categoryRepository;
    @Autowired private BudgetService budgetService;
    // @Autowired private Categoryservice categogoryService;

    public List<Transaction> findAll() {
        return transactionRepository.findAll();
    }

    public Optional<Transaction> findById(Long id) {
        return transactionRepository.findById(id);
    }
    public Transaction save(Transaction transaction) {
        return transactionRepository.save(transaction);
    }
    public void deleteById(Long id) {
        transactionRepository.deleteById(id);
    }

}
