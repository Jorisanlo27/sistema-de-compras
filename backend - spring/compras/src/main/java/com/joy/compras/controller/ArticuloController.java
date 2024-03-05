package com.joy.compras.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joy.compras.entity.Articulo;
import com.joy.compras.service.ArticuloService;

@RestController
@RequestMapping(path = "api/v1/articulos")
public class ArticuloController {

    @Autowired
    private ArticuloService service;

    @GetMapping
    public List<Articulo> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Articulo> getById(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @GetMapping("/marca/{marca}")
    public List<Articulo> getByMarca(@PathVariable("marca") String marca) {
        return service.getByMarca(marca);
    }

    @GetMapping("/desc")
    public List<Articulo> getDesc() {
        return service.getAll().stream()
                .sorted(Comparator.comparing(Articulo::getId).reversed())
                .collect(Collectors.toList());
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Articulo articulo) {
        service.saveOrUpdate(articulo);
    }

    @DeleteMapping("/{id}")
    public void saveOrUpdate(@PathVariable("id") Long id) {
        service.delete(id);
    }

}
