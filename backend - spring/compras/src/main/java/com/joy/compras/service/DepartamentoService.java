package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.Departamento;
import com.joy.compras.repository.DepartamentoRepository;

@Service
public class DepartamentoService {

    @Autowired
    DepartamentoRepository repo;

    public List<Departamento> getAll() {
        return repo.findAll();
    }

    public Optional<Departamento> getById(Long id) {
        return repo.findById(id);
    }

    public void saveOrUpdate(Departamento departamento) {
        repo.save(departamento);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
