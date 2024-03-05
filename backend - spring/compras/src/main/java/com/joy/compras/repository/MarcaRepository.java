package com.joy.compras.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joy.compras.entity.Marca;

@Repository
public interface MarcaRepository extends JpaRepository<Marca, Long> {

}
