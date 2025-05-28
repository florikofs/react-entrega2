# Sobre el proyecto
Es una tienda online de decoración de interiores, desarrollada con **React** + **Vite**.
Fue realizado con fines educativos.

Funcionalidades principales: 
- Navegar el listado de productos
- Filtrarlos por categoría
- Ver el detalle de cada producto
- Agregar productos al carrito
- Simular una compra con generación de orden.

---

## Demo
Se puede acceder al proyecto en Vercel:
[https://tu-nombre.vercel.app](https://tu-nombre.vercel.app)

---

## Tecnologías y herramientas utilizadas

- **[Vite](https://vite.dev/)**  
  Herramienta para crear aplicaciones React.

- **[React-Bootstrap](https://react-bootstrap.netlify.app/)**  
  Librería para usar componentes de forma sencilla (Bootstrap adaptado a React).

- **[Firebase](https://firebase.google.com/)**  
  Base de datos Firestore para almacenar y consultar productos y órdenes.

- **[Font Awesome](https://fontawesome.com/)**  
  Set de íconos usado en la interfaz.

- **[CSS Loaders & Spinners](https://cssloaders.github.io/)**  
  Animaciones para indicar carga o procesamiento.

- **[Dummy Image](https://dummyimage.com/)**  
  Generador de imágenes de prueba para productos.

---

## Instalación

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo

2. Instalá las dependencias:
   ```bash
    npm install

3. Iniciá el proyecto en modo desarrollo:
   ```bash
    npm run dev

---

## Estructura principal del proyecto
   ```bash
src/
│
├── Components/            # Componentes reutilizables
├── context/               # Contexto global (carrito, etc.)
├── pages/                 # Páginas
├── services/              # Conexión a Firebase
├── App.jsx                # Componente principal
├── main.jsx               # Punto de entrada de Vite