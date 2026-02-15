# 🚀 Desafío: Argentina al Espacio

Una página web moderna y atractiva para la hackathon "Desafío: Argentina al Espacio" - una competencia multidisciplinaria para estudiantes de 16 años en adelante.

## ✨ Características

- **Diseño Responsivo**: Optimizado para mobile, tablet y desktop
- **Temas Multidisciplinarios**: 8 categorías diferentes (Física, Software, Agronomía, Economía, Programación, Ciencia General, Derecho, Divulgación)
- **Animaciones Suaves**: Transiciones y efectos visuales con Framer Motion
- **Formularios Validados**: Sistema de registro y contacto con validation
- **Rutas Dinámicas**: Navegación fluida con React Router
- **SEO Optimizado**: Meta tags y estructura semántica
- **Colores Temáticos**: Paleta azul/blanco (espacio) con acentos naranja/rojo

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Routing**: React Router v6

## 📋 Secciones Incluidas

1. **Home** - Banner principal con logo y CTA
2. **About** - Información sobre el hackathon
3. **Categories** - 8 disciplinas diferentes
4. **Timeline** - Cronograma del evento
5. **Prizes** - Premios y reconocimientos ($40K+)
6. **Register** - Formulario de inscripción con validación
7. **FAQ** - Preguntas frecuentes
8. **Rules** - Normas y condiciones
9. **Contact** - Formulario de contacto
10. **Footer** - Enlaces y redes sociales

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js 16+ 
- npm o yarn

### Pasos de Instalación

1. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

2. **Ejecutar en desarrollo**
```bash
npm run dev
# o
yarn dev
```

La aplicación se abrirá en `http://localhost:3000`

3. **Build para producción**
```bash
npm run build
# o
yarn build
```

4. **Preview de producción**
```bash
npm run preview
# o
yarn preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── navbar.tsx      # Navegación principal
│   ├── footer.tsx      # Pie de página
│   ├── card.tsx        # Componente Card genérico
│   └── hero.tsx        # Sección hero principal
├── pages/              # Páginas/vistas principales
│   ├── home.tsx
│   ├── about.tsx
│   ├── categories.tsx
│   ├── timeline.tsx
│   ├── prizes.tsx
│   ├── register.tsx
│   ├── contact.tsx
│   ├── faq.tsx
│   └── rules.tsx
├── app.tsx            # Componente raíz con rutas
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🎨 Sistema de Colores

| Color | Valor | Uso |
|-------|-------|-----|
| Space 600 | #1e56db | Primario |
| Space 900 | #091a66 | Textos oscuros |
| Orange Accent | #ff6b35 | Acentos y CTAs |
| Red Accent | #d32f2f | Énfasis especial |

## 🔧 Configuración

### Tailwind CSS
Las configuraciones personalizadas están en `tailwind.config.ts`:
- Paleta de colores extendida (space colors)
- Animaciones personalizadas
- Efectos de sombra con glow

### Vite
Configuración en `vite.config.ts`:
- Puerto desarrollo: 3000
- Soporte para React con JSX

## 📝 Variables de Entorno

Crea un archivo `.env.local` si necesitas:
```
VITE_API_URL=tu_api_url
VITE_CONTACT_EMAIL=tu_email
```

## 🎯 Uso de Componentes

### Card Component
```tsx
<Card 
  icon="🚀"
  title="Mi Título"
  description="Mi descripción"
  gradient={true}
  hover={true}
/>
```

### Hero Component
```tsx
<Hero />
```

## 📱 Responsive Design

La aplicación está optimizada para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)

## 🔗 Rutas Disponibles

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/about` | Sobre Nosotros |
| `/categories` | Categorías |
| `/timeline` | Cronograma |
| `/prizes` | Premios |
| `/register` | Formulario de Registro |
| `/faq` | Preguntas Frecuentes |
| `/rules` | Normas y Condiciones |
| `/contact` | Contacto |

## ✅ Validación de Formularios

Ambos formularios (registro y contacto) incluyen:
- Validación de campos requeridos
- Email validation
- Longitud mínima de caracteres
- Mensajes de error descriptivos
- Feedback visual

## 🌐 SEO

- Meta tags configurados
- Títulos descriptivos
- Estructura semántica HTML
- Open Graph tags para redes sociales

## 🚀 Deployment

La aplicación puede desplegarse en:
- **Vercel** (recomendado para Vite)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

### Deployment en Vercel

```bash
npm install -g vercel
vercel
```

## 📞 Contacto y Soporte

Para preguntas sobre el hackathon:
- Email: soporte@argentina-al-espacio.com
- Teléfono: +54 9 11 XXXX-XXXX
- Discord: Comunidad Argentina al Espacio

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 🎯 Próximas Mejoras

- [ ] Integración con backend real
- [ ] Sistema de notificaciones
- [ ] Dashboard para participantes
- [ ] Chat en tiempo real
- [ ] Galería de proyectos
- [ ] Estadísticas en vivo

---

**Hecho con ❤️ para la innovación y la excelencia en Argentina** 🇦🇷
