# Portfolio

Portfolio personal construido con Astro y Tailwind CSS.

## Recorrido

- `/` — introducción animada con el logo personal y landing cinematográfica.
- `/portfolio` — portfolio completo (la "película" que se abre con **Watch Now**).
- `/portfolio#cartel`, `#reto`, `#cartelera`, `#palmares` — capítulos del portfolio.

La introducción se reproduce en cada carga de `/`. Si el sistema tiene activado
el movimiento reducido, se omite y se muestra directamente la landing.

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
