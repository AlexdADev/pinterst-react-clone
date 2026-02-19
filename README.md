
# 📌 Pinterest Clone – React + Vite

Un clon moderno de Pinterest construido con **React**, **Vite** y la API de **Unsplash**.  
Este proyecto busca replicar la experiencia visual de Pinterest: feed estilo *masonry*, hover con overlay oscuro, botones de acción y tipografía cuidada.

---

## ✨ Características principales

- 🔍 **Búsqueda de imágenes** con la API de Unsplash.  
- 🖼️ **Feed estilo collage (masonry)** con distribución dinámica de columnas.  
- 🎨 **Efectos visuales tipo Pinterest**:
  - Overlay oscuro al pasar el mouse.
  - Botones de **Guardar** y **Descargar** visibles en hover.
  - Bordes redondeados y tipografía moderna.
- 📱 **Responsive design**: se adapta a escritorio y móvil.
- ⚡ **Vite** como bundler para un desarrollo rápido y builds optimizadas.

---

## 🏗️ Arquitectura del proyecto

```
src/
 ├── assets/          # Íconos y recursos gráficos
 ├── components/      # Componentes reutilizables (Card, Header, Loader, etc.)
 ├── pages/           # Páginas principales (Home, Auth)
 ├── hooks/           # Custom hooks (ej: useUnsplashSearch)
 ├── App.jsx          # Punto de entrada de la aplicación
 ├── main.jsx         # Render principal con ReactDOM
 └── styles/          # Estilos globales
```

### Flujo de datos
1. **Home.jsx** → Renderiza el feed con Masonry.  
2. **Card.jsx** → Cada imagen con overlay, botones y datos del autor.  
3. **DownloadButton.jsx** → Maneja la descarga directa de imágenes.  
4. **useUnsplashSearch.js** → Hook para consumir la API de Unsplash.  

---

## 🧑‍💻 Buenas prácticas aplicadas

- **Componentización**: cada parte de la UI está aislada en su propio componente.  
- **Hooks personalizados**: lógica de búsqueda encapsulada en `useUnsplashSearch`.  
- **Estilos modulares**: cada componente importa su propio `.css`.  
- **Accesibilidad**: uso de `alt` en imágenes y `loading="lazy"` para optimizar carga.  
- **Optimización**: Vite + React.memo en componentes como `Card` para evitar renders innecesarios.  
- **Consistencia visual**: tipografía global (`Inter`) y sistema de colores coherente.  

---

## 🚀 Instalación y uso

```bash
# Clonar repositorio
git clone https://github.com/AlexdADev/pinterst-react-clone.git

# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev
```

---

## 📜 Licencia

Este proyecto utiliza imágenes de **Unsplash** bajo su licencia libre de uso.  
Código bajo licencia MIT.
```
