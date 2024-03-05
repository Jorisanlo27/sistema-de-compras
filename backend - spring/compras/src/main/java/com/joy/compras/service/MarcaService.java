package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.Marca;
import com.joy.compras.repository.MarcaRepository;

@Service
public class MarcaService {

    @Autowired
    MarcaRepository repo;

    public List<Marca> getAll() {
        return repo.findAll();
    }

    public Optional<Marca> getById(Long id) {
        return repo.findById(id);
    }

    public void saveOrUpdate(Marca marca) {
        repo.save(marca);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
