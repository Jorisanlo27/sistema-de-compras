package com.joy.compras.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joy.compras.entity.OrdenCompra;

@Repository
public interface OrdenCompraRepository extends JpaRepository<OrdenCompra, Long> {
    List<OrdenCompra> findByIdAsientoIsNull();

    List<OrdenCompra> findByDepartamento_NombreContaining(String departamento);

    List<OrdenCompra> findByProveedor_NombreComercialContaining(String proveedor);

    List<OrdenCompra> findByArticulos_Articulo_DescripcionContaining(String articulo);
}
