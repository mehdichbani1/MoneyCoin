package com.projet.demo.controller;

import com.projet.demo.model.Budget;
import com.projet.demo.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/budgets")
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping
    public List<Budget> getAllBudgets() {
        return budgetService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Budget> getBudgetById(@PathVariable Long id) {
        Optional<Budget> budget = budgetService.findById(id);
        if (!budget.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(budget.get());
    }

    @PostMapping
    public ResponseEntity<Budget> createBudget(@RequestBody Budget budget) {
        Budget savedBudget = budgetService.save(budget);
        URI location = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(savedBudget.getId())
                .toUri();
        return ResponseEntity.created(location).body(savedBudget);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Budget> updateBudget(@PathVariable Long id, @RequestBody Budget budget) {
        if (!budgetService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        budget.setId(id);
        Budget updatedBudget = budgetService.save(budget);
        return ResponseEntity.ok(updatedBudget);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBudget(@PathVariable Long id) {
        if (!budgetService.findById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        budgetService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
