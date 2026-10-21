# Agents.md — Contexto del proyecto

> Revisado el 21 de octubre de 2026 contra el estado real del repositorio.
> Este documento es contexto para agentes, no una garantía: antes de editar,
> lee los archivos implicados. Si algo no coincide, prevalece el código.

## 1. Resumen

Portfolio personal de **Jorge Condado Carballo**, construido con **Astro 7.1.3
+ Tailwind CSS 4.3.3**, con una isla de **React 18 + MUI 5 + react-slick** para
la landing de `/`.

La experiencia está inspirada en dos referentes:

- **La Velada del Año**: identidad de combate, cartel, mains event y tono
  deportivo-espectáculo.
- **Netflix**: introducción animada al entrar y landing con estética de
  catálogo (hero, filas de carátulas, vista rápida y ficha modal).

El flujo actual es:

```text
/  →  intro con LogoPersonal.svg
   →  landing tipo Netflix (isla React)
   →  Watch Now  →  /?watch=1  →  intro  →  /portfolio
```

## 2. Rutas y navegación

| Ruta | Contenido |
|---|---|
| `/` | Intro + landing tipo Netflix. |
| `/?watch=1` | Reproduce la intro y después entra en `/portfolio`. |
| `/portfolio` | Portfolio completo (Astro). |
| `/portfolio#cartel` | Sección “El cartel”. |
| `/portfolio#reto` | Sección “El reto”. |
| `/portfolio#cartelera` | Sección “La cartelera”. |
| `/portfolio#rueda` | Sección de contacto. |
| `/portfolio#palmares` | Sección “El palmarés”. |

- **Watch Now** es un enlace real (`<a>`) a `/?watch=1`. La intro detecta el
  parámetro y, al terminar, hace `location.replace('/portfolio')`. Es una
  navegación MPA normal: no hay router cliente.
- “Más información” abre la ficha modal del portfolio dentro de `/`.
- La cabecera de la landing enlaza a `#inicio`, `/portfolio`,
  `/portfolio#cartelera` y `/portfolio#rueda`.
- El footer de la landing enlaza al portfolio, a `#inicio`, GitHub y LinkedIn.
- Desde el footer de `/portfolio` se puede volver a `/`.

## 3. Arquitectura

### 3.1. Entrada (`src/pages/index.astro`)

- Renderiza `<Intro />` y, debajo, `.landing` con `<NetflixApp client:only="react" />`.
- La intro es un overlay fijo (`z-index: 100`) sobre la landing. El hueco de la
  landing ya está en el DOM (con un placeholder de espera) para que al terminar
  la animación no haya pantalla en blanco.
- `.netflix-boot` (en `src/styles/global.css`) es el placeholder estático que se
  ve mientras hidrata la isla React o si el JS falla.
- La landing arranca con opacidad 0 y se revela cuando la intro termina
  (`html.intro-done`) o cuando se omite (`html.intro-skip`).
- `Layout` admite `overlays` y `pageClass`. En `/` se usa
  `overlays={false}` y `pageClass="netflix-page"` para desactivar los overlays
  globales y fijar el fondo `#141414`.

### 3.2. Landing tipo Netflix (`src/netflix/`)

- `NetflixApp.tsx`: composición raíz de la isla. Envuelve todo en
  `ThemeProvider` + `CssBaseline`, y en los providers de ficha y vista rápida.
- `theme.ts`: tema MUI oscuro (`#141414`), rojo Netflix `#e50914`, oro
  `#f6c343`, tipografía Roboto.
- `data/catalog.ts`: catálogo temático. Contiene el ítem del portfolio y seis
  ediciones de La Velada (2021–2026). Define las filas: “Veladas anteriores”,
  “Los main events”, “Clásicos del ring”, “Próximamente” y “Archivo completo”.
- `types.ts`: `CatalogItem` y `CatalogRow`.
- `components/Hero.tsx`: hero a pantalla completa con el logo como marca de
  agua, badge de candidatura, sinopsis y botones Watch Now / Más información.
- `components/Row.tsx`: fila de carátulas con `react-slick`, flechas propias y
  scroll por página. `hooks/useSlidesToShow.ts` decide 2/3/4/5/6 tarjetas según
  el ancho.
- `components/Card.tsx`: tarjeta; al pasar el ratón abre la vista rápida y al
  pulsar abre la ficha.
- `components/PreviewPortal.tsx`: vista rápida flotante renderizada con
  `createPortal`; calcula posición y tamaño a partir del rect de la tarjeta.
- `providers/PreviewProvider.tsx`: estado de la vista rápida, con retardo de
  apertura y de cierre.
- `providers/DetailModalProvider.tsx`: estado de la ficha seleccionada.
- `components/DetailModal.tsx`: ficha modal. Para el portfolio muestra el logo;
  para las veladas, su imagen. Incluye metadatos, sinopsis, capítulos del
  portfolio y CTA a `/portfolio`. Enlaza a `https://www.infolavelada.com/`.
- `components/Header.tsx`: cabecera fija que cambia al hacer scroll
  (`hooks/useScrolled.ts`), navegación y menú de usuario.
- `components/Footer.tsx`: enlaces de sitio y contacto desde `src/data/site.ts`.
- `styles.css`: estilos propios de la isla, todos prefijados con `.netflix-`.
- `icons.ts`: barrel propio de iconos de `@mui/icons-material` con
  normalización del interop CJS que aplica Vite 8 a estos módulos.

### 3.3. Portfolio (`src/pages/portfolio.astro`)

- Conserva el portfolio Astro original completo: componentes, secciones,
  estilos y enlaces internos.
- No ejecuta la intro; solo la landing de `/`.

### 3.4. Separación de responsabilidades

- `src/components/intro/Intro.astro`: animación, tiempos, logo, skip, modo
  `?watch=1` y lógica de finalización.
- `src/netflix/*`: toda la landing tipo Netflix. No se importa desde el
  portfolio ni desde la intro.
- `src/data/landing.ts`: `feature`, `featureDetails` y `featureChapters` de la
  “película” del portfolio. Lo consume la isla React.
- `src/data/site.ts`: datos globales (`site`, `portfolioPath`, `navLinks`,
  `contacts`, `pitchHtml`, candidatura).
- `src/data/content.ts` y `src/data/projects.ts`: contenido del portfolio Astro.
- `src/styles/global.css`: tokens, utilidades compartidas, transición de
  landing, placeholder de arranque, foco visible y movimiento reducido.
- `src/components/ui/Logo.astro`: logo reutilizable en el portfolio.

## 4. Archivos creados o modificados

### Creados en la iteración Netflix

- `src/netflix/NetflixApp.tsx` y todo `src/netflix/components/*`.
- `src/netflix/data/catalog.ts`.
- `src/netflix/providers/*`.
- `src/netflix/hooks/*`.
- `src/netflix/theme.ts`, `styles.css`, `icons.ts`, `types.ts`.
- `src/components/intro/Intro.astro`.
- `src/pages/portfolio.astro`.

### Modificados

- `src/pages/index.astro` — intro + landing React; se eliminaron los
  componentes `Landing*` anteriores.
- `src/layouts/Layout.astro` — props `overlays` y `pageClass`, theme-color
  condicional, Roboto y favicon.
- `src/styles/global.css` — `logo-mark`, transición de landing, foco, skip de
  intro, movimiento reducido y placeholder `.netflix-boot`.
- `src/data/landing.ts` — ficha compartida con la isla React.
- `src/data/site.ts` — `portfolioPath`, `pitchHtml`, navegación y contactos.
- `package.json` — `@astrojs/react`, React 18, MUI 5, Emotion, `react-slick`,
  `slick-carousel` y `oxc-transform-react` (peer de `@astrojs/react`).
- `astro.config.mjs` — integración `@astrojs/react`.
- `tsconfig.json` — `jsx`, `baseUrl`, alias `@/*` y exclusiones de carpetas de
  referencia.
- `pnpm-workspace.yaml` — override de `@types/react` a 18.3.31 para evitar
  duplicados de tipos entre MUI y `@types/react-slick`.
- `eslint.config.js` — ignora las carpetas de referencia de CodePen.
- `README.md` — recorrido y rutas.

### Recursos

- `public/images/LogoPersonal.svg` y `LogoPersonal.jpg` fueron aportados por el
  usuario; no se rediseñaron.
- El SVG tiene relleno negro, así que se usa como **máscara CSS**
  (`mask-image`) y se pinta con color o degradado. No se usa como `<img>` directo
  sobre fondo oscuro.
- `public/images/Preview.webp` sigue siendo la imagen del portfolio.
- Las veladas usan las portadas SVG propias `public/images/veladas/velada-1.svg`
  … `velada-6.svg`. No hay carteles externos en el catálogo.
- En esa misma carpeta conviven las imágenes fuente `LaVeladaN.*`; el catálogo
  actual no las referencia, pero se conservan como material de referencia.

## 5. Decisiones técnicas

### 5.1. Stack y dependencias

- **Astro + Tailwind** para páginas, portfolio, intro y estilos globales.
- **React 18 + MUI 5** solo para la landing de `/`, montada con
  `client:only="react"`. Es una isla: no hay SSR de la landing y el resto del
  sitio sigue siendo Astro puro.
- **react-slick** para las filas de carátulas. Se importa su CSS en
  `NetflixApp.tsx`.
- `@astrojs/react` 7.1.0 exige `oxc-transform-react` como peer; está instalado
  explícitamente para que `pnpm install` no dependa de una resolución implícita.
- `@types/react-slick` arrastra `@types/react` 19; el override de
  `pnpm-workspace.yaml` lo fija a 18.3.31 para que coincida con React 18 y MUI 5.
- **Interop CJS**: `@mui/icons-material` y `react-slick` se publican en CommonJS
  y Vite 8 los preempaqueta como `{ default: componente }`. `src/netflix/icons.ts`
  y el wrapper `SliderComponent` de `Row.tsx` aceptan ambas formas (componente
  directo o namespace con `default`).
- No se añadieron routers, librerías de animación ni gestores de estado
  globales. El estado de la isla vive en providers de React.
- Las carpetas `netflix-intro-animation-pure-css`, `react-dailyui003landing-page`
  y `netflix-clone-react-typescript-main` son material de referencia. No forman
  parte del build, no se importan desde la aplicación y están excluidas del
  repositorio Git.
- Se añadieron esas carpetas a `globalIgnores` de ESLint.

### 5.2. Introducción

- Basada en la animación original: cuatro columnas de pinceladas, luces y zoom
  final.
- Tiempos base: `0.5 s` de espera + `3.5 s` de zoom (unos `4 s`), más un
  desvanecido de `0.6 s` hacia la landing.
- Las pinceladas y luces se generan con arrays y variables CSS.
- El logo real se integra con `mask-image: url('/images/LogoPersonal.svg')` y un
  degradado blanco → oro → rojo.
- La finalización se controla con `animationend` sobre el stage y un temporizador
  de respaldo de `4.8 s`. Al terminar:
  - se elimina `inert` de la landing,
  - se añade `intro-done`,
  - la intro se desvanece y se elimina del DOM.
- Botón **“Saltar introducción”** siempre disponible y accesible.
- La landing permanece `inert` mientras la intro está activa.
- Sin JavaScript, `<noscript>` oculta la intro y muestra la landing.
- Con `prefers-reduced-motion: reduce`, la intro se omite por completo. También
  se escucha un cambio dinámico de esa preferencia.

### 5.3. Fluidez de la intro (importante)

La intro se rediseñó para que **solo se animen `transform` y `opacity`** en las
capas que se mueven. Cualquier cambio futuro debe respetar estas reglas:

- **Logo**: `.intro__mark-wrap` recorta (`overflow: hidden`) y
  `.intro__mark.logo-mark` entra con `translate3d` + `opacity`. No se usa
  `clip-path` animado ni `drop-shadow` sobre el logo.
- **Brillo**: `.intro__sheen` es una capa hermana con la misma máscara, y
  `.intro__sheen-bar` anima su `transform`. **Debe conservar
  `background: none`**: `.logo-mark` define `background-color: currentColor` y,
  si se hereda, la capa tapa el logo en blanco (regresión ya detectada).
- **Pinceladas**: se eliminó `mix-blend-mode: screen`. El halo que antes daba un
  `box-shadow` de 29 px es ahora un degradado con bordes suaves.
- **Lámparas**: sin `box-shadow` y sin el `::before` que duplicaba la sombra.
  Son gradientes con bordes transparentes y un `opacity` bajo. Su animación
  infinita (`alternate`) solo mueve `transform`.
- **Aura**: sin `filter: blur`; el `radial-gradient` ya es suave.
- **Stage**: `contain: paint`, `backface-visibility: hidden` y
  `will-change: transform`. La intro usa `isolation: isolate` y
  `contain: layout paint`.
- **Prohibido en esta animación**: animar `box-shadow`, `filter`, `clip-path`,
  `background-position` o `width/height`; aplicar `mix-blend-mode` a subárboles
  animados; aplicar `filter` a un padre cuyos hijos animan (fuerza a repintar
  todo el subárbol).
- Para revisar fotogramas, pausa y posiciona las animaciones con la Web
  Animations API:

  ```js
  document.getAnimations().forEach((a) => a.pause())
  document.getAnimations().forEach((a) => { a.currentTime = 1200 })
  ```

  Las capturas headless con `--virtual-time-budget` no avanzan las animaciones
  de forma fiable. Tampoco lo son los FPS medidos en headless: una página
  estática da ~52 fps de base con renderizado software.

### 5.4. Reproducción de la intro y modo Watch Now

**La intro se reproduce en cada carga o recarga de `/`.**

- No hay `sessionStorage` ni “una vez por sesión”. No reintroducirlo salvo
  petición expresa.
- Si el navegador restaura la página desde bfcache al volver atrás, no hay
  recarga y la intro no se repite. Con recarga real, sí.
- La única excepción es `prefers-reduced-motion`, por accesibilidad.
- **Watch Now** navega a `/?watch=1`. La intro se reproduce y, al terminar (o al
  pulsar “Saltar”), añade `is-entering-portfolio`, desvanece el stage y llama a
  `location.replace('/portfolio')` a los 480 ms.
- Si `?watch=1` llega con movimiento reducido, la intro se elimina y se entra
  directamente en el portfolio.

### 5.5. Landing tipo Netflix

- Representa **una única película**: la candidatura/portfolio de Jorge. Las
  filas del catálogo son ediciones de La Velada, no otros portfolios ni
  proyectos ajenos.
- El hero usa `feature` de `src/data/landing.ts` y `portfolioItem` del catálogo.
- El catálogo de veladas es temático y sirve de metáfora visual; no debe
  convertirse en un catálogo de contenido inventado.
- La ficha del portfolio reutiliza `pitchHtml` y los capítulos reales del
  portfolio.
- La vista rápida y la ficha son navegación real, no decorativa.
- Todo el estilo de la isla va prefijado con `.netflix-` para no contaminar el
  portfolio.
- El fondo del hero combina degradados radiales, el logo como marca de agua y un
  glow. `Preview.webp` se usa como imagen OG de la página y queda como
  `backdrop` del ítem del portfolio en el catálogo; el hero y la ficha usan el
  logo, no esa captura.

### 5.6. Transición y navegación

- La intro se desvanece mientras la landing se revela; no hay recarga entre
  ambas.
- La landing es una isla `client:only`, así que hasta que hidrata se ve
  `.netflix-boot`. La intro tapa ese periodo en la mayoría de los casos.
- Watch Now y el resto de enlaces usan navegación MPA normal. Astro genera
  páginas estáticas y el proyecto no tiene router cliente.
- No se simula la navegación con `preventDefault` ni `location.href`; se usan
  anclas reales, salvo el `location.replace` deliberado del modo `?watch=1`.

### 5.7. Accesibilidad

- Foco visible global en oro (`:focus-visible`) de 2 px.
- `inert` en la landing durante la intro.
- Skip de intro con etiqueta textual.
- Iconos decorativos con `aria-hidden`.
- Logo con `role="img"` y `aria-label` cuando corresponde; decorativo en usos
  secundarios.
- La ficha modal usa `Dialog` de MUI con cierre por teclado y `aria-label`.
- La vista rápida usa `role="dialog"` y `aria-label`.
- Las flechas de las filas son `<button>` con `aria-label`.
- Las tarjetas son `<button>`; la vista rápida se abre también con foco de
  teclado (`onFocus`/`onBlur`), no solo con el ratón.
- Movimiento reducido soportado en intro y landing.
- Se conservaron los estados hover, focus y active existentes.

## 6. Contrato de comportamiento (no romper)

1. **La intro se reproduce en cada recarga de `/`.** No volver a usar
   `sessionStorage` para omitirla.
2. La intro debe usar **LogoPersonal.svg**, no una letra, un texto o el logo de
   Netflix.
3. **Watch Now** debe seguir llevando al portfolio. Hoy pasa por `/?watch=1`
   para reproducir la intro; si se cambia, hay que tocar a la vez
   `ActionButtons.tsx` y `Intro.astro`.
4. No inventar información profesional, proyectos, experiencia, años, métricas
   ni rutas.
5. Mantener una sola “película” (el portfolio). El catálogo de veladas es
   temático; no añadir portfolios ni proyectos ajenos como si fueran contenido.
6. Mantener Astro + Tailwind para el sitio y React + MUI solo para la landing
   de `/`. Evitar dependencias nuevas sin justificación.
7. Conservar atrás/adelante del navegador.
8. No romper las secciones ni los enlaces internos del portfolio.
9. No modificar las carpetas de referencia de CodePen como si fueran parte de la
   aplicación.
10. Respetar `prefers-reduced-motion`, el foco visible y la navegación por
    teclado.
11. **No reintroducir efectos caros en la intro**: solo `transform`/`opacity` en
    las capas animadas. Nada de `box-shadow`, `filter`, `clip-path` animado ni
    `mix-blend-mode` en subárboles que se mueven.
12. La capa `.intro__sheen` debe mantener `background: none` (ver 5.3).

## 7. Verificación realizada

Comandos:

```bash
corepack pnpm install
corepack pnpm exec tsc --noEmit --ignoreDeprecations 6.0
corepack pnpm build
corepack pnpm lint
```

`pnpm` no está instalado globalmente en esta máquina; se usa `corepack pnpm`.
`npm run` también funciona porque `node_modules` ya está instalado. TypeScript
está disponible como dependencia transitiva (`node_modules/.bin/tsc`), pero no
hay script de `typecheck` ni `astro check`; el `--ignoreDeprecations 6.0` es
necesario por el `baseUrl` del `tsconfig.json`.

Resultados de la última iteración (21/10/2026):

- Build: 2 páginas generadas (`/` y `/portfolio`), sin errores.
- `tsc --noEmit` y ESLint sin errores.
- Landing: 5 filas y 17 tarjetas; hero con `LogoPersonal.svg`, badge TOP 70-80,
  Watch Now y Más información.
- Watch Now: `/?watch=1` → intro con logo → `/portfolio`. “Saltar introducción”
  y `prefers-reduced-motion` entran directamente.
- Verificados con Chrome headless + DevTools Protocol: hover preview, modal de
  Velada, modal del portfolio, menú móvil y navegación atrás/adelante.
- Responsive comprobado a 390 y 1440 px en la última pasada (768/1024 en
  iteraciones anteriores), sin overflow horizontal.
- `/portfolio` sigue funcionando sin la intro y sin regresiones visuales.
- Consola sin errores ni peticiones fallidas.

Verificación de la intro (iteraciones anteriores):

- Chrome headless + DevTools Protocol, con animaciones pausadas y posicionadas
  por la Web Animations API (300–4200 ms):
  - Reveal del logo correcto y con el degradado blanco → oro → rojo.
  - Brillo (sheen) visible solo sobre la forma del logo.
  - Pinceladas y lámparas sin sombras duras.
  - Zoom final y entrada de la landing correctos.
- Regresión detectada y corregida: `.intro__sheen` heredaba
  `background-color: currentColor` de `.logo-mark` y cubría el logo en blanco.
- Capturas headless con `--virtual-time-budget`: no fiables para posicionar
  animaciones; se sustituyeron por el método de pausa anterior.
- FPS medidos en headless: no representativos (renderizado software; una página
  estática da ~52 fps de base).

## 8. Limitaciones y pendientes conocidos

- La landing es `client:only="react"`: no hay SSR de su contenido. Hasta que
  hidrata se ve el placeholder `.netflix-boot`; si el JS falla, se queda ahí.
- No hay script de `typecheck` ni `astro check`; el typecheck se hace con
  `corepack pnpm exec tsc --noEmit --ignoreDeprecations 6.0`.
- No hay configuración de despliegue ni CI. `/portfolio` funciona en desarrollo
  y preview; si el hosting exige barra final, habría que ajustar
  `trailingSlash` o los enlaces.
- Las fuentes se cargan desde Google Fonts; sin red se usan las de respaldo.
- `Preview.webp` es una captura con texto; se usa como imagen OG y como
  `backdrop` del ítem del portfolio en el catálogo. Si existe un key art
  definitivo, conviene sustituirla.
- Watch Now reproduce la intro otra vez antes de entrar en `/portfolio`
  (`/?watch=1`). Es el comportamiento actual; si se quiere entrada directa, hay
  que cambiar el `href` y el modo watch de la intro a la vez.
- Las carpetas de referencia siguen en el working tree local como material de
  consulta, pero están excluidas de Git y del build.
- No hay pruebas automatizadas de regresión visual.

## 9. Guía para futuros agentes

- Antes de editar, **lee el estado real de los archivos**; este documento es
  contexto, no una garantía de que el código no haya cambiado.
- Reutiliza componentes, tokens y datos existentes antes de crear nuevos.
- Mantén la separación: Astro para páginas/portfolio/intro, React solo en
  `src/netflix/`.
- No añadas un catálogo de portfolios ni más “películas”; las filas son
  ediciones de La Velada.
- Si falta información profesional, déjala como pendiente; no la inventes.
- Si tocas la intro, comprueba explícitamente:
  - que se reproduce al recargar,
  - que el skip funciona,
  - que la landing queda interactiva,
  - que `prefers-reduced-motion` sigue funcionando,
  - que solo animas `transform`/`opacity` (ver 5.3),
  - que `.intro__sheen` sigue con `background: none`.
- Si tocas Watch Now, comprueba `/?watch=1`, la intro y la entrada final en
  `/portfolio`.
- Si tocas la isla React, comprueba hidratación, vista rápida, ficha modal,
  filas, cabecera con scroll y responsive.
- Si tocas la navegación, comprueba atrás/adelante y las anclas del portfolio.
- Ejecuta como mínimo `corepack pnpm exec tsc --noEmit --ignoreDeprecations 6.0`,
  `corepack pnpm build` y `corepack pnpm lint`; si es posible, verifica la
  experiencia en navegador y en móvil.
- No añadas al commit las carpetas de referencia ni archivos generados; revisa
  `git status --short` antes de publicar.
- Para inspeccionar la intro, usa el método de pausa de la Web Animations API
  descrito en 5.3; no te fíes de capturas con tiempo virtual.
- No reformatees masivamente archivos existentes ni hagas refactorizaciones
  ajenas al objetivo.

## 10. Git y publicación

- Repositorio: <https://github.com/jorgee-cc/portfolio-la-velada>
- Rama principal: `main`. Remoto `origin` por SSH:
  `git@github.com:jorgee-cc/portfolio-la-velada.git`.
- Publicado el 21/10/2026. No hay CI ni despliegue automático configurado.
- Carpetas excluidas del repositorio (solo referencia local):
  - `netflix-clone-react-typescript-main/`
  - `netflix-intro-animation-pure-css/`
  - `react-dailyui003landing-page/`
- Antes de publicar:

  ```bash
  corepack pnpm exec tsc --noEmit --ignoreDeprecations 6.0
  corepack pnpm build
  corepack pnpm lint
  git status --short
  ```

- Flujo de publicación:

  ```bash
  git add <archivos>
  git commit -m "tipo(scope): resumen"
  git push origin main
  ```

- El `README.md` describe el proyecto; este documento es el contexto operativo
  para agentes. Si cambia la arquitectura, actualiza ambos.
