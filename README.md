# Portfolio

Portfolio personal construido con Astro y Tailwind CSS.

## Recorrido

- `/` — introducción animada con el logo personal, tráiler automático y landing cinematográfica.
- `/portfolio` — portfolio completo (la "película" que se abre con **Watch Now**).
- `/portfolio#cartel`, `#reto`, `#cartelera`, `#palmares` — capítulos del portfolio.

La introducción se reproduce en cada carga de `/`. Si el sistema tiene activado
el movimiento reducido, se omite y se muestra directamente la landing.

## Estructura

- `src/pages/` — rutas `/` y `/portfolio`.
- `src/components/portfolio/` — secciones del portfolio Astro.
- `src/components/intro/` — intro animada y sus datos visuales.
- `src/components/ui/` — primitivas y tarjetas reutilizables.
- `src/netflix/` — isla React de la landing cinematográfica.
- `src/data/` — contenido compartido.
- `src/scripts/` y `src/lib/` — comportamiento de navegador y utilidades.
- `src/styles/` — sistema de diseño y estilos globales.

## Desarrollo

```sh
pnpm install
pnpm dev
```

## Producción

```sh
pnpm build
pnpm preview
```
