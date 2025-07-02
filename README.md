Aquí tienes una plantilla completa de `README.md` para tu proyecto **Gestión de Libros**, adaptada a los requisitos del taller:

---

## 📚 Gestión de Libros – API RESTful con NestJS

Este proyecto es una API RESTful desarrollada con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) que permite gestionar libros, autores, categorías y reseñas.

---

### 📌 Requisitos

* Node.js v18+
* MySQL Server
* Nest CLI (`npm i -g @nestjs/cli`)

---

### ⚙️ Instalación y ejecución

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/gestion-libros.git
cd gestion-libros
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Crear archivo `.env`**

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=gestion_libros
```

4. **Crear la base de datos en MySQL**

```sql
CREATE DATABASE gestion_libros;
```

5. **Ejecutar la aplicación**

```bash
npm run start:dev
```

La API estará corriendo en: [http://localhost:3000](http://localhost:3000)

---

### 🧱 Estructura del proyecto

```
src/
├── modules/
│   ├── autor/
│   ├── categoria/
│   ├── libro/
│   └── resena/
├── app.module.ts
├── app.service.ts
└── app.controller.ts
```

---

### 🔗 Endpoints principales

| Recurso   | Método                            | Ruta                               | Descripción          |
| --------- | --------------------------------- | ---------------------------------- | -------------------- |
| Autor     | GET                               | `/autores`                         | Listar autores       |
|           | POST                              | `/autores`                         | Crear autor          |
|           | GET                               | `/autores/:id`                     | Obtener autor por ID |
|           | PUT                               | `/autores/:id`                     | Actualizar autor     |
|           | DELETE                            | `/autores/:id`                     | Eliminar autor       |
| Categoría | igual que autor con `/categorias` |                                    |                      |
| Libro     | igual que autor con `/libros`     | Requiere `autorId` y `categoriaId` |                      |
| Reseña    | igual que autor con `/resenas`    | Requiere `libroId`                 |                      |

---

### ✅ Validaciones

* Se usan `class-validator` y `class-transformer` en todos los DTOs.
* Las reseñas permiten calificaciones entre 1 y 5.
* No se permiten campos vacíos para `nombre`, `título`, etc.

---

### ❌ Manejo de errores

* `NotFoundException` para recursos no existentes
* `HttpException` con mensajes claros para errores

---

### 📦 Dependencias clave

* `@nestjs/typeorm`
* `mysql2`
* `class-validator`, `class-transformer`
* `@nestjs/config`

---

### 🧪 Colección de Postman

* Importar el archivo: `gestion-libros.postman_collection.json`
* Contiene rutas para:

  * CRUD de Autores, Categorías, Libros y Reseñas
  * Ejemplos con cuerpo de peticiones
  * Casos de error

👉 Puedes descargarla o copiarla desde el repositorio.

---

### 🚀 Despliegue

No aplica para este taller, pero el proyecto puede ser desplegado fácilmente en plataformas como **Render**, **Railway**, o **Heroku**.

---

### 🧑‍💻 Autor

> Desarrollado por **\[Duber Emerson Taborda Restrepo]** como parte del taller de desarrollo de APIs RESTful con NestJS.

