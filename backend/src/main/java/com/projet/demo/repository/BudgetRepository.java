package com.projet.demo.repository;

import com.projet.demo.model.Budget;
import com.projet.demo.model.Category;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepository extends JpaRepository<Budget,Long> {
    Optional<Budget> findByCategories(Category category);
}
