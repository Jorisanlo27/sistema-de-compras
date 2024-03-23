package com.joy.compras.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joy.compras.entity.OrdenCompra;
import com.joy.compras.repository.OrdenCompraRepository;

@Service
public class OrdenCompraService {

    @Autowired
    OrdenCompraRepository repo;

    public List<OrdenCompra> getAll() {
        return repo.findAll();
    }

    public Optional<OrdenCompra> getById(Long id) {
        return repo.findById(id);
    }

    public List<OrdenCompra> getAllIdAsientoNull() {
        return repo.findByIdAsientoIsNull();
    }

    public List<OrdenCompra> getByArticulo(String articulo) {
        return repo.findByArticulos_Articulo_DescripcionContaining(articulo);
    }

    public List<OrdenCompra> getByDepartamento(String departamento) {
        return repo.findByDepartamento_NombreContaining(departamento);
    }

    public List<OrdenCompra> getByProveedor(String proveedor) {
        return repo.findByProveedor_NombreComercialContaining(proveedor);
    }

    public void saveOrUpdate(OrdenCompra ordenCompra) {
        repo.save(ordenCompra);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
