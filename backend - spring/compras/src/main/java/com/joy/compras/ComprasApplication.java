package com.joy.compras;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@SpringBootApplication
public class ComprasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComprasApplication.class, args);
	}

	@Bean
	OpenAPI customOpenAPIC() {
		return new OpenAPI()
				.info(new Info()
						.title("Sistema De Compras - ISO815")
						.version("1.0.0")
						.description(
								"Sistema de Compras que sirve para gestionar Departamentos, Artículos, Unidades de Medida, Proveedores y Ordenes de Compra. Recuperandolos mediante consultas por criterios (ej: Ordenes por departamentos y empleados)"));
	}
}