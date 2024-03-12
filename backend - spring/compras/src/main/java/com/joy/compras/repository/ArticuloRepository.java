package com.joy.compras.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joy.compras.entity.Articulo;

@Repository
public interface ArticuloRepository extends JpaRepository<Articulo, Long> {

    List<Articulo> findByMarca_NombreContaining(String marcaNombre);

}
