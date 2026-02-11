# NeuroCarolina

Sitio web profesional de **NeuroCarolina Traslaviña**, neuropsicóloga clínica especializada en evaluación, rehabilitación neuropsicológica y epilepsia.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 3
- **Animaciones:** Framer Motion
- **3D:** Three.js + React Three Fiber (hero background)
- **Smooth scroll:** Lenis
- **Optimización de imágenes:** Sharp

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev        # http://localhost:3000

# Build de producción
npm run build
npm start

# Linting
npm run lint
```

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx                  # Layout raíz (fuentes, metadata, ClientShell)
│   ├── page.tsx                    # Homepage (hero, servicios, logos, timeline, artículos, FAQ)
│   ├── globals.css                 # Variables CSS, resets, utilidades, prose styles
│   ├── articulos/
│   │   ├── ArticulosContent.tsx    # Listado de artículos
│   │   ├── perfil-neuropsicologico-heterotopia-epilepsia/
│   │   └── neurorehabilitacion-en-epilepsia/
│   ├── servicios/                  # Página de servicios detallados
│   ├── sobre-mi/                   # Biografía y trayectoria
│   └── contacto/                   # Formulario de contacto
├── components/
│   ├── ClientShell.tsx             # Wrapper global (Navbar, Footer, BookingModal, Splash)
│   ├── Navbar.tsx                  # Navegación con menú móvil
│   ├── Footer.tsx                  # Footer con redes sociales
│   ├── CTAButton.tsx               # Botón reutilizable (primary, secondary, whatsapp)
│   ├── Section.tsx                 # Wrapper de sección con padding consistente
│   ├── ServiceCard.tsx             # Card con flip 3D (desktop) y modal (mobile)
│   ├── Timeline.tsx                # Timeline de trayectoria con lightbox
│   ├── FAQ.tsx                     # Acordeón de preguntas frecuentes
│   ├── BookingModal.tsx            # Modal de agendar cita
│   ├── SplashScreen.tsx            # Pantalla de carga inicial
│   ├── HeroBackground.tsx          # Background del hero (WebGL o fallback)
│   ├── GeometricParallaxCanvas.tsx # Escena 3D con parallax
│   ├── BackgroundBlobs.tsx         # Fallback CSS cuando WebGL no está disponible
│   └── ErrorBoundary.tsx           # Captura de errores en componentes
└── lib/
    ├── constants.ts                # WhatsApp, redes sociales, links de navegación
    ├── utils.ts                    # Helpers (whatsappLink, etc.)
    ├── LenisProvider.tsx           # Provider de smooth scroll
    ├── useBookingModal.ts          # Hook global para el modal de citas
    └── useReducedMotion.ts         # Hook para prefers-reduced-motion
```

## Paleta de colores

| Token           | Hex       | Uso                                      |
|-----------------|-----------|------------------------------------------|
| `brand-purple`  | `#5B2D8B` | Estructural: nav, footer, títulos, WhatsApp |
| `brand-lilac`   | `#9B7EDC` | Solo fondos/gradientes a 8-18% opacidad  |
| `brand-rose`    | `#E8C7E8` | Conversión emocional: CTAs principales   |
| `ink`           | `#2B2433` | Texto principal                          |
| `ink-muted`     | `#6E647A` | Texto secundario                         |
| `paper`         | `#FFFFFF` | Fondo principal                          |
| `paper-soft`    | `#F8F5FA` | Fondo alternado de secciones             |

## Assets

```
public/
├── brand/          # Logos institucionales (FIRE, USB, HappyBrain, iMaster, Simón Bolívar) + splash
├── images/         # Fotos de perfil y congresos
└── NeuroCarolina/  # Logos del sitio (Morado, Blanco Trimmed)
```

## Despliegue

El proyecto genera páginas estáticas (`output: static` compatible). Se puede desplegar en cualquier plataforma que soporte Next.js: Vercel, Netlify, etc.

---

Desarrollado con tecnología de [DT Growth Partners](https://dtgrowthpartners.com/)
