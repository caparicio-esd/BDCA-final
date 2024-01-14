# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tasks

### Header de la dapp

- [x] 0.1 - Cambiar el título a Asignatura Full: NOMBRE-CURSO.

### Página Home

- [x] 1.1 - Añadir un elemento que muestre la dirección del usuario owner.
- [x] 1.2 - Añadir un elemento que muestre la dirección del coordinador de la Asignatura.
- [x] 1.3 - Añadir un formulario para cambiar la dirección del coordinador. Este formulario solo se debe mostrar si el usuario conectado es el owner.
- [x] 1.4 - Añadir un indicador que indique si la asignatura está abierta o cerrada.
- [x] 1.5 - Añadir un formulario que permita cerrar la asignatura. Solo se debe mostrar si el usuario conectado es el coordinador.

### Página Evaluaciones

- [x] 2.1 - Crear un formulario para añadir nuevas evaluaciones. Este formulario solo debe mostrarse si el usuario conectado es el coordinador.
- [ ] 2.2 - Crear un formulario para editar las evaluaciones existentes. Este formulario solo debe mostrarse si el usuario conectado es el coordinador.

### Página Profesores

- [ ] 3.1 - Crear una página que liste todos los profesores de la asignatura.
- [ ] 3.2 - Crear un formulario para añadir nuevos profesores. Este formulario solo debe mostrarse si el usuario conectado es el owner.

### Página Alumnos

- [ ] 4.1 - Que el listado de todos los alumnos solo pueda verlo el owner, el coordinador o un profesor.
- [ ] 4.2 - Crear un formulario para que un usuario pueda automatricularse como alumno. La dirección seleccionada en Metamask identifica al alumno que se está matriculando.
- [ ] 4.3 - Crear un formulario para que el owner del contrato pueda matricular a nuevos alumnos.

### Página Calificaciones

- [ ] 5.1 - Añadir algo que permita obtener un listado con las notas de todos los alumnos en una determinada evaluación. Esta funcionalidad solo debe estar disponible para el coordinador y los profesores de la asignatura.
- [ ] 5.2 - Añadir algo que permita obtener un listado con las notas de un alumno en un todas las evaluaciones. Esta funcionalidad solo debe estar disponible para el propio alumno.
- [ ] 5.3 - En la tabla de calificaciones, meter algo para que pueda editarse la nota de un alumno en una determinada evaluación si tener que escribir ni la dirección del alumno, ni el índice de la evaluación. Esta funcionalidad solo debe estar disponible para los profesores de la asignatura.
- [ ] 5.4 - Añadir algo para que el coordinador o un profesor de la asignatura puedan obtener un listado con la notas final de todos los alumnos en la asignatura.

### Página Mis Cosas

- [x] 6.1 - Añadir unos indicadores que informen sobre los roles del usuario: si es owner, coordinador, profesor o alumno.
