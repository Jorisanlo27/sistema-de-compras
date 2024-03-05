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

import com.joy.compras.entity.Proveedor;
import com.joy.compras.service.ProveedorService;

@RestController
@RequestMapping(path = "api/v1/proveedores")
public class ProveedorController {

    @Autowired
    private ProveedorService service;

    @GetMapping
    public List<Proveedor> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Proveedor> getAll(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Proveedor proveedor) {
        service.saveOrUpdate(proveedor);
    }

    @DeleteMapping("/{id}")
    public void saveOrUpdate(@PathVariable("id") Long id) {
        service.delete(id);
    }

}
