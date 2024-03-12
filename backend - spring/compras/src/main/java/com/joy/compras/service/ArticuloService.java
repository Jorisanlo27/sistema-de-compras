package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.Articulo;
import com.joy.compras.repository.ArticuloRepository;

@Service
public class ArticuloService {

    @Autowired
    ArticuloRepository repo;

    public List<Articulo> getAll() {
        return repo.findAll();
    }

    public Optional<Articulo> getById(Long id) {
        return repo.findById(id);
    }
    
    public List<Articulo> getByMarca(String marca) {
        return repo.findByMarca_NombreContaining(marca);
    }

    public void saveOrUpdate(Articulo articulo) {
        repo.save(articulo);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
