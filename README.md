
# Proyecto E-commerce de Coderhouse
Es una tienda online de decoración de interiores, desarrollada con **React** + **Vite**.
Fue realizado con fines educativos.

Se puede acceder al proyecto desde este enlace: 
[https://react-entregafinal.vercel.app/](https://react-entregafinal.vercel.app/)

<br>

## Funcionalidades principales: 
- Navegar el listado de productos
- Filtrarlos por categoría
- Ver el detalle de cada producto
- Agregar productos al carrito
- Simular una compra con generación de orden.

<br>

## Tecnologías y herramientas utilizadas

### Tecnologías

- **[React](https://es.react.dev/)**  
  La biblioteca para interfaces de usuario web y nativas.

- **[Firebase](https://firebase.google.com/)**  
  Base de datos Firestore para almacenar y consultar productos y órdenes.


### Software

- **[Node](https://nodejs.org/es)**  
  Entorno de ejecución de JavaScript multiplataforma.

- **[Vite](https://vite.dev/)**  
  Herramienta para crear aplicaciones React.


### Librerías y herramientas

- **[React-Bootstrap](https://react-bootstrap.netlify.app/)**  
  Librería para usar componentes de forma sencilla (Bootstrap adaptado a React).

- **[Font Awesome](https://fontawesome.com/)**  
  Set de íconos usado en la interfaz.

- **[CSS Loaders & Spinners](https://cssloaders.github.io/)**  
  Animaciones para indicar carga o procesamiento.

- **[Dummy Image](https://dummyimage.com/)**  
  Generador de imágenes de prueba para productos.

- **[Vercel](https://vercel.com/)**  
  Infraestructura en la nube para crear, escalar y proteger una web más rápida y personalizada.  

<br>

## Instalación

<br>

1. Instalá las versiones de software indicadas:
   - Node >= 18.0.0
   - Vite >= 3.1.4

<br>

2. Instalá las dependencias:
   ```
    npm install

<br>

3. Configurá el archivo .env:
   ```
   VITE_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID
   VITE_FIREBASE_API_ID
   ```

<br>

4. Iniciá el proyecto en modo desarrollo:
   ```
    npm run dev

<br>

## Estructura principal del proyecto
   ```
src/
│
├── Components/            # Componentes reutilizables
├── context/               # Contexto global (carrito, etc.)
├── pages/                 # Páginas
├── services/              # Conexión a Firebase
├── App.jsx                # Componente principal
├── main.jsx               # Punto de entrada de Vite