Proyecto de comercio electrónico en React
Descripción
Este proyecto es un e-commerce desarrollado en React para la venta de productos de diferentes categorías. La aplicación cuenta con varias funcionalidades de gestión de productos, un carrito de compras, y una experiencia de usuario agradable y fluida. Se incluye Firebase como backend para la base de datos, lo que permite almacenar y gestionar productos en tiempo real.

Funcionalidades
Navegación de Productos : Explora los productos por categorías.
Detalle de Producto : Consulta la descripción, precio, disponibilidad y selecciona la cantidad.
Carrito de Compras : Agrega y elimina productos, con actualización automática de cantidades y precios totales.
Firebase : Almacena los productos y datos en Firestore para un acceso rápido y dinámico.
Implementación futura de Pago : Integración planificada con la pasarela de pago de MercadoPago para un proceso de compra completo.
Estructura del proyecto
src/components: Contiene todos los componentes principales como Navbar, ItemListContainer, ItemDetailContainer y el carrito de compras.
src/firebaseConfig.js: Archivo de configuración de Firebase para la conexión con Firestore.
src/pages: Contiene las páginas de categorías y detalle de producto.
Tecnologías utilizadas
React : Librería principal para el desarrollo de la interfaz de usuario.
Firebase : Backend para la base de datos de productos y gestión de datos.
React Router : Navegación entre páginas y productos.
Material UI : Estilos y componentes para un diseño visual moderno.
SweetAlert2 : Alertas personalizadas para agregar, eliminar productos y mensajes de error.
Requisitos previos
Node.js y npm : Asegúrese de tener los instalados para manejar las dependencias del proyecto.
Cuenta en Firebase : Necesaria para la configuración del backend de la base de datos.
Instalación y configuración
Clonar el repositorio :


Copiar código
git clone https://github.com/MarPiriz04/ProyectoFinalReact-Piriz
cd tu-repositorio
Instalar las dependencias :


Copiar código
npm install
Configurar Firebase :

Crea un proyecto en Firebase y habilita Firestore.

Copia tus credenciales de Firebase y crea un archivo firebaseConfig.jsen src:


Copiar código
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "999",
    authDomain: 999",
    projectId: "p9z99",
    storageBucket: "999",
    messagingSenderId: "999",
    appId: "''''''"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
Iniciar el proyecto :



Copiar código
npm run dev
La aplicación estará disponible en http://localhost:3000.

Uso
Navega por las categorías para ver los productos.
Selecciona un producto para ver más detalles y ajusta la cantidad deseada.
Agrega productos al carrito y verifica el total actualizado en tiempo real.
(Futuro) Procede al pago usando MercadoPago.
Contribución
Si deseas contribuir al proyecto, por favor sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama con tus cambios:
intento

Copiar código
git checkout -b nombre-de-rama
Haz commit de tus cambios y subelos.
Abre una solicitud de extracción y explica tus mejoras.
Contacto
Para cualquier pregunta o sugerencia, puedes comunicarte a través de marianapiriz14@hotmail.com o mediante los issues en el repositorio de GitHub.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
