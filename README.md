# 🛒 Sistema de Compras

<a class="hidden" href="https://sistema-de-compras.vercel.app/"><img class="w-full" src="https://raw.githubusercontent.com/Jorisanlo27/sistema-de-compras/main/frontend%20-%20astro/src/assets/home-page-capture.png" alt="Flowbite Admin Dashboard Live Preview"></a>

Este software para el departamento de compras es una aplicación diseñada para gestionar: Departamentos, Artículos, Unidades de Medida, Proveedores y Órdenes de Compra. Este Permite realizar consultas por diferentes criterios, como órdenes por fecha, departamentos y/o empleados, facilitando la administración y seguimiento de las compras dentro de la empresa.

Este proyecto es un ERP (Enterprise Resource Planning) compuesto por 9 módulos en total. Este módulo de compras se integra con el de contabilidad que es el módulo central, y todos los demás módulos se comunican mediante una RESTful API.

Este proyecto fue desarrollado como parte del curso final de las asignaturas ISO-810 y ISO-815 (Integración de sistemas).

## 🔗 Enlaces Directos

- **Frontend**: Alojado en: https://sistema-de-compras.vercel.app/

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sistema-de-compras.vercel.app/) 

- **Backend**: Desplagado en: https://compras-backend.onrender.com/swagger-ui/index.html

[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://compras-backend.onrender.com/swagger-ui/index.html)

## 📝 Características
- <ins>**Gestión de Departamentos**:</ins> Permite la creación, modificación y eliminación de departamentos.
- <ins>**Gestión de Artículos**:</ins> Facilita la administración de artículos, incluyendo su creación, modificación y eliminación.
- <ins>**Gestión de Unidades de Medida**:</ins> Administra las diferentes unidades de medida utilizadas en las órdenes de compra.
- <ins>**Gestión de Proveedores**:</ins> Permite la administración de proveedores, incluyendo la creación, modificación y eliminación.
- <ins>**Gestión de Órdenes de Compra**:</ins> Se pueden crear, modificar y eliminar órdenes de compra, y filtrarlas basadas en diferentes criterios.
- <ins>**Consultas por Criterios**:</ins> Los registros pueden ser recuperados por parametros, como fecha, activo, proveedor, entre otros.

## ⛏️ Tecnologías Utilizadas
### Frontend
| | | | | | | | |
|-|-|-|-|-|-|-|-|
| <img src="https://skillicons.dev/icons?i=nodejs&theme=light" width="48"> | <img width="48" src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png" alt="Vite" title="Vite"/> | <img width="48" src="https://github.com/marwin1991/profile-technology-icons/assets/54946572/397c0300-2e47-464e-81eb-6e991c9255fc" alt="Astro" title="Astro"/> | <img width="48" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/> | <img src="https://skillicons.dev/icons?i=javascript&theme=light" width="48"> | <img src="https://skillicons.dev/icons?i=typescript&theme=light" width="48"> | <img width="48" src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" alt="Tailwind CSS" title="Tailwind CSS"/> | <img src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png" width="48"> |
| [Node.js](https://nodejs.org/) | [Vite](https://vitejs.dev/) | [Astro](https://astro.build/) | [React](https://react.dev/) | [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | [TypeScript](https://www.typescriptlang.org/) | [Tailwind](https://tailwindcss.com/) | [Flowbite](https://flowbite.com/) |

### Backend
| | | |
|-|-|-|
| [![My Skills](https://skillicons.dev/icons?i=spring&theme=light)](https://skillicons.dev) | [![My Skills](https://skillicons.dev/icons?i=java&theme=light)](https://skillicons.dev) | [![My Skills](https://skillicons.dev/icons?i=maven&theme=light)](https://skillicons.dev) |
| [Spring](https://spring.io/) | [Java](https://www.java.com/) | [Maven](https://maven.apache.org/) |

### Base de Datos
| |
|-|
| <img width="48" class="rounded" src="https://github.com/marwin1991/profile-technology-icons/assets/19180175/3b371807-db7c-45b4-8720-c0cfc901680a" alt="MSSQL" title="MSSQL"/>
| [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-2022) |
### Documentación de API 
| |
|-|
| <img width="48" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/> |
| [Swagger](https://swagger.io/) |

## 📂 Estructura de Carpetas
El proyecto está organizado en dos carpetas principales. Después de clonar este repositorio, encontrarás la siguiente estructura (simplificada):
```sh
🛒
├── 🚀 frontend - astro
│   # Contiene el código del frontend desarrollado con Astro, React, Tailwind CSS y Flowbite.
│
└── 🌿 backend - spring
    # Contiene el código del backend desarrollado con Spring Boot, Java y Maven.
```

## 🏃 Metodología Ágil
El proyecto fue desarrollado meidante Scrum-Kanban. Esta metodología combina los principios de Scrum, con sus sprints y roles definidos, junto con las prácticas de Kanban, que se centra en la visualización del flujo de trabajo y la limitación del trabajo en curso. Esto permitió una planificación flexible y una adaptación continua durante el desarrollo del proyecto.

1. **Herramientas de Gestión de Proyectos**
    Para la gestión de tareas y seguimiento del progreso, se utilizó GitHub Projects en conjunto con issues, sprints y milestones. Las issues se utilizaron para representar las user stories y tareas individuales, mientras que los sprints y milestones se utilizaron para agrupar y planificar el trabajo en función de objetivos a corto y largo plazo.

2. **Sprints**
    Se definieron sprints de duración fija, generalmente de una o dos semanas, durante los cuales se llevaban a cabo las tareas planificadas. Al comienzo de cada sprint, se seleccionaban las user stories o tareas a abordar en función de las prioridades del product backlog.

3. **Reuniones Semanales**
    Se realizaron 3 reuniones cada semana para revisar el progreso del trabajo y discutir cualquier obstáculo que pudiera surgir. Estas reuniones permitieron mantener al equipo informado sobre el estado del proyecto y facilitaron la colaboración y resolución rápida de problemas.

La Adopción de estos lineamientos proporcionaron una visión clara del trabajo pendiente, en progreso y completado en cada etapa del proyecto, facilitando la colaboración y coordinación entre los miembros del equipo.

## 🧑‍💻 Contribuciones
Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del proyecto.
2. Crea una rama con las siguientes nomenclaturas: 
  
    2.1 Nueva funcionalidad 
    ```bash
    git checkout -b feature-[username]-[funcionalidad]
    ```

    2.2 Corrección de errores 
    ```bash
    git checkout -b bugfix-[username]-[error]
    ```

3. Haz commit de tus cambios 
    ```bash
    git commit -m "Descripción Cambios"
    ```
4. Haz push a la rama
    ```bash
    git push origin [nombre rama]
    ```
5. Crear Pull Request.

##  ✒️ Autores

- [**Jorge Santana**](https://www.linkedin.com/in/jorgericardosantanalora/)
- [**Omar Sanchez**](https://github.com/OmR-SC)
- [**Yefri Rodriguez**](https://github.com/YefriRA)
