package com.joy.compras.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "ordenes_articulos")
public class OrdenesArticulos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Departamento departamento;

    @ManyToOne
    private Proveedor proveedor;

    @ManyToOne
    @JoinColumn(name = "orden_compra_id")
    private OrdenCompra ordenCompra;

    @ManyToOne
    @JoinColumn(name = "articulo_id")
    private Articulo articulo;

    @Column(nullable = false)
    private int cantidad;

    @ManyToOne
    private UnidadMedida unidadMedida;

    @Column(nullable = false)
    private BigDecimal costoUnitario;

}
