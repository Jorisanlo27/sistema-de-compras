package com.joy.compras.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joy.compras.entity.UnidadMedida;
import com.joy.compras.service.UnidadMedidaService;

@RestController
@RequestMapping(path = "api/v1/unidadmedida")
public class UnidadMedidaController {

    @Autowired
    private UnidadMedidaService service;

    @GetMapping
    public List<UnidadMedida> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<UnidadMedida> getAll(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody UnidadMedida unidadMedida) {
        service.saveOrUpdate(unidadMedida);
    }

    @DeleteMapping("/{id}")
    public void saveOrUpdate(@PathVariable("id") Long id) {
        service.delete(id);
    }

}
