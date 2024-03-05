package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.UnidadMedida;
import com.joy.compras.repository.UnidadMedidaRepository;

@Service
public class UnidadMedidaService {

    @Autowired
    UnidadMedidaRepository repo;

    public List<UnidadMedida> getAll() {
        return repo.findAll();
    }

    public Optional<UnidadMedida> getById(Long id) {
        return repo.findById(id);
    }

    public void saveOrUpdate(UnidadMedida unidadMedida) {
        repo.save(unidadMedida);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
