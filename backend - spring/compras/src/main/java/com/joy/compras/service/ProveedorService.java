package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.Proveedor;
import com.joy.compras.repository.ProveedorRepository;

@Service
public class ProveedorService {

    @Autowired
    ProveedorRepository repo;

    public List<Proveedor> getAll() {
        return repo.findAll();
    }

    public Optional<Proveedor> getById(Long id) {
        return repo.findById(id);
    }

    public void saveOrUpdate(Proveedor proveedor) {
        repo.save(proveedor);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
