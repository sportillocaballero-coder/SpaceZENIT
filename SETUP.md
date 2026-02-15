# 🚀 Guía de Instalación Rápida

## Paso 1: Instalar Dependencias

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

Si prefieres yarn:
```bash
yarn install
```

Esto descargará e instalará todas las dependencias necesarias (React, Vite, Tailwind, etc.).

## Paso 2: Ejecutar en Desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:3000`

Verás tus cambios en tiempo real mientras editas los archivos.

## Paso 3: Explorar el Proyecto

Aquí está la estructura básica:

- **src/pages/** - Cada página del sitio (Home, About, Register, etc.)
- **src/components/** - Componentes reutilizables (Navbar, Footer, Card)
- **tailwind.config.ts** - Configuración de estilos
- **package.json** - Dependencias del proyecto

## Paso 4: Personalizar

### Cambiar Colores
Edita `tailwind.config.ts` para modificar la paleta de colores.

### Cambiar Información del Evento
Edita `src/constants.ts` para actualizar:
- Nombre del evento
- Fechas
- Información de contacto
- Categorías
- Premios

### Cambiar Contenido
Edita las páginas en `src/pages/` para cambiar textos, describciones, etc.

### Cambiar Imágenes
Coloca las imágenes en `public/images/` y referéncialas en el HTML.

## Paso 5: Build para Producción

Cuando estés listo para publicar:

```bash
npm run build
```

Esto creará una carpeta `dist/` con los archivos optimizados para producción.

## Paso 6: Desplegar

Puedes desplegar en:

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
- Conecta tu repositorio GitHub a Netlify
- Configura build command: `npm run build`
- Configura publish directory: `dist`

### Opción 3: GitHub Pages
Consulta la documentación de Vite para deploys en GitHub Pages.

## 🔧 Troubleshooting

### Error: "npm: command not found"
- Instala Node.js desde https://nodejs.org/

### Error: Puerto 3000 ya en uso
```bash
npm run dev -- --port 3001
```

### Error: Estilos no se ven correctamente
- Limpia el cache: `rm -rf node_modules`
- Reinstala: `npm install`

## 📚 Recursos

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [Framer Motion](https://www.framer.com/motion/)

## ✅ Próximos Pasos

1. ✅ Corre `npm install`
2. ✅ Corre `npm run dev`
3. ✅ Abre http://localhost:3000
4. ✅ ¡Comienza a personalizar!

¡Diviértete creando! 🎉
