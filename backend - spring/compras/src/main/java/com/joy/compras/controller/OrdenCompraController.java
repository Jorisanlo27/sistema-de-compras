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

import com.joy.compras.entity.OrdenCompra;
import com.joy.compras.entity.OrdenesArticulos;
import com.joy.compras.service.OrdenCompraService;

@RestController
@RequestMapping(path = "api/v1/ordenesCompra")
public class OrdenCompraController {

    @Autowired
    private OrdenCompraService service;

    @GetMapping
    public List<OrdenCompra> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Optional<OrdenCompra> getById(@PathVariable("id") Long id) {
        return service.getById(id);
    }

    @GetMapping("/null")
    public List<OrdenCompra> getAllIdAsientoNull() {
        return service.getAllIdAsientoNull();
    }

    @GetMapping("/articulo/{articulo}")
    public List<OrdenCompra> getByArticulo(@PathVariable("articulo") String articulo) {
        return service.getByArticulo(articulo);
    }

    @GetMapping("/departamento/{departamento}")
    public List<OrdenCompra> getByDepartamento(@PathVariable("departamento") String departamento) {
        return service.getByDepartamento(departamento);
    }

    @GetMapping("/proveedor/{proveedor}")
    public List<OrdenCompra> getByProveedor(@PathVariable("proveedor") String proveedor) {
        return service.getByProveedor(proveedor);
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody OrdenCompra ordenCompra) {
        for (OrdenesArticulos articulo : ordenCompra.getArticulos()) {
            articulo.setOrdenCompra(ordenCompra);
        }
        service.saveOrUpdate(ordenCompra);
    }

    @DeleteMapping("/{id}")
    public void saveOrUpdate(@PathVariable("id") Long id) {
        service.delete(id);
    }

}
