package com.projet.demo.service;

import com.projet.demo.model.Budget;
import com.projet.demo.model.Category;
import com.projet.demo.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {
    @Autowired private BudgetRepository budgetRepository;

    public List<Budget> findAll() {
        return budgetRepository.findAll();
    }
    public Optional<Budget> findById(Long id) {
        return budgetRepository.findById(id);
    }
    public Budget save( Budget budget) {
        return budgetRepository.save(budget);
    }
    public void deleteById(Long id) {
        budgetRepository.deleteById(id);
    }
    public Optional<Budget> findByCategory(Category category){
        return budgetRepository.findByCategories(category);
    }
}
