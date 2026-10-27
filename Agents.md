# Agents.md — Contexto del proyecto

> Revisado el 27 de octubre de 2026 contra el estado real del repositorio.
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
| `/portfolio#candidaturas` | Sección “Candidaturas”. |
| `/portfolio#cartelera` | Sección “La cartelera”. |
| `/portfolio#rueda` | Sección de contacto. |
| `/portfolio#palmares` | Sección “El palmarés”. |

- **Watch Now** es un enlace real (`<a>`) a `/?watch=1`. La intro detecta el
  parámetro y, al terminar, hace `location.replace('/portfolio')`. Es una
  navegación MPA normal: no hay router cliente.
- “Más información” abre la ficha modal del portfolio dentro de `/`.
- La cabecera de la landing enlaza a `#inicio`, `/portfolio`,
  `/portfolio#cartelera` y `/portfolio#rueda` con los textos de navegación, y
  añade iconos directos a GitHub y LinkedIn (visibles desde `md`) junto al
  avatar; el logo de Netflix es una imagen plana, sin enlace ni comportamiento
  de botón.
- El footer de la landing enlaza al portfolio, a `#inicio`, GitHub y LinkedIn.
- El menú móvil y la cabecera de `/portfolio` enlazan directamente a GitHub y
  LinkedIn (ver 3.3).
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
- `data/catalog.ts`: catálogo temático. Contiene el ítem del portfolio y siete
  ediciones de La Velada (I–VII, 2021–2027). Define dos filas: “Veladas
  anteriores” (ediciones I–VI) y “Próximas veladas” (la VII, por confirmar).
- `types.ts`: `CatalogItem` y `CatalogRow`.
- `components/Hero.tsx`: composición del hero. El badge, el título y los
  metadatos viven en `components/hero/`; los botones, en `ui/ActionButtons.tsx`.
  El tráiler, su póster y el control de sonido también viven aquí (ver 5.8).
- `components/Row.tsx`: fila de carátulas con `react-slick` y scroll por página.
  La flecha es `components/row/RowArrow.tsx` y `hooks/useSlidesToShow.ts` decide
  2/3/4/5/6 tarjetas según el ancho.
- `components/Card.tsx`: tarjeta; al pasar el ratón abre la vista rápida y al
  pulsar abre la ficha.
- `components/PreviewPortal.tsx`: vista rápida flotante renderizada con
  `createPortal`. La posición se calcula en `lib/layout.ts`.
- `providers/PreviewProvider.tsx`: estado de la vista rápida, con retardo de
  apertura y de cierre.
- `providers/DetailModalProvider.tsx`: estado de la ficha seleccionada.
- `components/DetailModal.tsx`: armazón de la ficha modal. `components/detail/`
  separa la cabecera (`DetailHero`), el contenido del portfolio
  (`PortfolioDetails`), el de las veladas (`EditionDetails`) y los estilos
  compartidos (`styles.ts`). Enlaza a `https://www.infolavelada.com/`.
- `components/Header.tsx`: cabecera fija que cambia al hacer scroll
  (`hooks/useScrolled.ts`). El logo de Netflix es una imagen plana, no un
  enlace a `#inicio`. La navegación y el menú de usuario están en
  `components/header/`, y los enlaces en `data/navigation.ts`. Incluye iconos
  directos a GitHub y LinkedIn (`GitHubIcon`/`LinkedInIcon` de `icons.ts`) a
  partir de `site.github` y `site.linkedin`, visibles desde `md`.
- `components/Footer.tsx`: enlaces de sitio y contacto desde `src/data/site.ts`.
- `styles.css`: estilos propios de la isla, todos prefijados con `.netflix-`.
- `constants.ts`: alturas, rutas y colores compartidos por la isla.
- `icons.ts`: barrel propio de iconos de `@mui/icons-material` con
  normalización del interop CJS que aplica Vite 8 a estos módulos.

### 3.3. Portfolio (`src/pages/portfolio.astro`)

- Conserva el portfolio Astro original completo: secciones, estilos y enlaces
  internos, ahora en `src/components/portfolio/`.
- Las secciones comparten `ui/Section.astro`; las tarjetas de proyectos están
  separadas en `ui/MainEventCard.astro`, `ui/CoMainCard.astro`,
  `ui/ProjectCard.astro` y `ui/ApplicationCard.astro`.
- `components/portfolio/Nav.astro` muestra enlaces directos a GitHub y LinkedIn
  con iconos (desde `sm`) y, en el menú móvil, dos botones con etiqueta. Ambos
  salen de `socialLinks` en `src/data/site.ts`.
- No ejecuta la intro; solo la landing de `/`.

### 3.4. Separación de responsabilidades

- `src/components/intro/Intro.astro`: markup y CSS de la animación.
  `intro-data.ts` contiene pinceladas y lámparas; `src/scripts/intro.ts`,
  tiempos, skip, modo `?watch=1` y lógica de finalización.
- `src/netflix/*`: toda la landing tipo Netflix. No se importa desde el
  portfolio ni desde la intro.
- `src/components/ui/*`: primitivas compartidas del portfolio (`Section`,
  `SectionHeader`, `Tag`, `Logo`, `Icon`, `Ticker`, `Atmosphere`).
- `src/scripts/*`: comportamiento de navegador sin framework: intro, cuenta
  atrás, menú móvil, reveal on scroll y año del footer.
- `src/lib/tones.ts`: clases de color por tono, compartidas por las secciones.
- `src/data/landing.ts`: `feature`, `featureDetails` y `featureChapters` de la
  “película” del portfolio. Lo consume la isla React.
- `src/data/site.ts`: datos globales (`site`, `portfolioPath`, `eventDate`,
  `navLinks`, `contacts`, `pitchHtml`, candidatura).
- `src/data/content.ts` y `src/data/projects.ts`: contenido del portfolio Astro.
- `src/styles/global.css`: tokens, utilidades compartidas, transición de
  landing, placeholder de arranque, foco visible y movimiento reducido.

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
  condicional, Roboto, favicon dorado (`LogoPersonalGold.png`) y precarga de
  `LogoPersonal.svg` en la landing.
- `src/styles/global.css` — `logo-mark`, transición de landing, foco, skip de
  intro, movimiento reducido y placeholder `.netflix-boot`.
- `src/data/landing.ts` — ficha compartida con la isla React.
- `src/data/site.ts` — `portfolioPath`, `pitchHtml`, navegación y contactos.
- `package.json` — `@astrojs/react`, React 18, MUI 5, Emotion, `react-slick`,
  `slick-carousel` y `oxc-transform-react` (peer de `@astrojs/react`).
- `astro.config.mjs` — integración `@astrojs/react`.
- `tsconfig.json` — `jsx`, `baseUrl`, alias `@/*` y exclusión de `dist`.
- `pnpm-workspace.yaml` — override de `@types/react` a 18.3.31 para evitar
  duplicados de tipos entre MUI y `@types/react-slick`.
- `eslint.config.js` — ignora `dist/` y `.vercel/`.
- `README.md` — recorrido y rutas.

### Refactor de limpieza (21/10/2026)

- `src/components/portfolio/` agrupa las secciones del portfolio; `Card.astro`
  pasa a llamarse `Lineup.astro`.
- `src/components/ui/` agrupa primitivas y tarjetas reutilizables.
- `src/scripts/` y `src/lib/` extraen comportamiento y utilidades que antes
  vivían dentro de componentes.
- `src/netflix/components/detail/`, `header/`, `hero/` y `row/` dividen los
  componentes React que concentraban markup y estilos.
- `src/netflix/constants.ts` y `src/netflix/data/navigation.ts` centralizan
  valores y enlaces de la isla.
- `src/netflix/lib/layout.ts` aísla el cálculo de posición de la vista rápida.
- `src/data/content.ts`, `landing.ts` y `site.ts` absorben datos que estaban
  incrustados en `Hero.astro`, `Hero.tsx` y el catálogo.
- Se eliminaron exports internos, tokens/keyframes CSS sin uso y assets no
  referenciados (`LaVeladaN.*` y vídeos generados sueltos).

### Iteración de branding y catálogo (27/10/2026)

- `public/images/LogoPersonalGold.png` — versión dorada del logo personal
  (recoloreado del JPG rojo `#E60515` al oro `#f6c343` de la paleta, misma
  forma y anti-aliasing).
- `src/netflix/components/header/UserMenu.tsx` — el avatar de la esquina
  superior derecha muestra el logo dorado.
- `src/layouts/Layout.astro` — el favicon de la pestaña apunta al logo dorado.
- `src/netflix/components/Header.tsx` — el logo de Netflix deja de ser un
  enlace a `#inicio`; pasa a imagen plana sin interacción.
- `src/netflix/data/catalog.ts` — se añade la edición VII, se usan las fotos
  reales `Velada1-6.webp` y las filas quedan en “Veladas anteriores” y
  “Próximas veladas”.
- `public/images/veladas/` — se eliminan `velada-1.svg`…`velada-6.svg` y se
  añaden `Velada1.webp`…`Velada6.webp` (la VII usa `velada-7.svg`).
- `TODO.md` — estado de tareas.

### Enlaces sociales directos (27/10/2026)

- `src/data/site.ts` — nuevos `socialLinks` (GitHub y LinkedIn con su icono SVG);
  `contacts` reutiliza los mismos paths en lugar de duplicarlos.
- `src/components/portfolio/Nav.astro` — iconos directos a GitHub y LinkedIn en
  la cabecera (desde `sm`) y botones con etiqueta en el menú móvil.
- `src/netflix/icons.ts` — se añaden `GitHubIcon` y `LinkedInIcon` al barrel.
- `src/netflix/components/Header.tsx` — iconos directos a GitHub y LinkedIn
  junto al avatar (desde `md`); en móvil siguen en el menú de usuario.

### Recursos

- `public/images/LogoPersonal.svg` y `LogoPersonal.jpg` fueron aportados por el
  usuario; no se rediseñaron. `LogoPersonalGold.png` se deriva del JPG
  (recoloreado) y es el logo que se muestra: avatar de la cabecera de Netflix y
  favicon de la pestaña. El JPG rojo ya no se referencia desde el código.
- El SVG tiene relleno negro, así que se usa como **máscara CSS**
  (`mask-image`) y se pinta con color o degradado. No se usa como `<img>` directo
  sobre fondo oscuro.
- `public/images/Preview.webp` sigue siendo la imagen del portfolio.
- Las veladas I–VI usan fotos reales `public/images/veladas/Velada1.webp` …
  `Velada6.webp`; la VII usa `velada-7.svg` mientras no exista cartel oficial.
- Las imágenes fuente `LaVeladaN.*` se eliminaron en la limpieza por no estar
  referenciadas ni formar parte del build.
- `public/videos/CreacionLogo.webm` es el tráiler del hero y
  `public/videos/CreacionLogo-poster.jpg` su póster (fotograma extraído con
  `ffmpeg`). `Logo1.mp4`, `Logo2.mp4` y `CreacionLogo.mp4` no los usa la
  aplicación.

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
- Las carpetas de referencia originales se eliminaron tras integrar la intro.
  No formaban parte del build ni se importaban desde la aplicación.

### 5.2. Introducción

- Basada en la animación original: cuatro columnas de pinceladas, luces y zoom
  final.
- Guion actual:
  - `0–1,5 s`: las pinceladas barren la escena y el logo sube desde su máscara.
  - `0,8–2,1 s`: se encienden las lámparas y se atenúa el brillo del logo.
  - `2,15–3,3 s`: zoom final (`scale(1)` → `scale(7)`).
  - `3,3–3,8 s`: la intro se desvanece sobre la landing.
- La escena se genera en el *frontmatter* de `Intro.astro`: las pinceladas son
  **una única textura SVG `data-URI`** (a partir de `furStrokes`) y las lámparas
  **dos capas de franjas estáticas** con máscara radial. No hay una etiqueta por
  pincelada ni por lámpara.
- El logo real se integra con `mask-image: url('/images/LogoPersonal.svg')` y un
  degradado blanco → oro → rojo. El SVG se precarga desde `Layout.astro` cuando
  `pageClass === 'netflix-page'` para que la máscara no llegue tarde.
- La finalización se controla con `animationend` del zoom y un temporizador de
  respaldo de `3,8 s`. Al terminar:
  - se elimina `inert` de la landing,
  - se añade `intro-done`,
  - la intro se desvanece y se elimina del DOM,
  - se emite `window.dispatchEvent(new Event('intro:done'))` para que el resto de
    la página (el tráiler) arranque sin competir con el ident.
- Botón **“Saltar introducción”** siempre disponible y accesible.
- La landing permanece `inert` mientras la intro está activa.
- Sin JavaScript, `<noscript>` oculta la intro y muestra la landing.
- Con `prefers-reduced-motion: reduce`, la intro se omite por completo. También
  se escucha un cambio dinámico de esa preferencia.

### 5.3. Fluidez de la intro (importante)

#### Causa raíz del lag (no repetirla)

La versión lenta tenía ~150 nodos dentro del escenario:

- 4 ayudantes × 31 pinceladas = **124 `<span>` con degradados**.
- **28 lámparas**, cada una con su propia animación `alternate` infinita y su
  `will-change: transform`.

El escenario completo se escalaba de golpe a `scale(15)` **mientras esas
animaciones internas seguían corriendo**. Cuando algo dentro de un subárbol
transformado sigue animándose, el navegador no puede cachear la superficie: tiene
que volver a rasterizarla/recomponerla en cada frame. A ×15 esa superficie mide
unos 4500 × 4500 px (~20 Mpx, ~80 MB de textura), así que el coste por frame se
dispara (pintura + subida de textura + memoria). A eso se sumaban:

- el aura recortada por `overflow: hidden` + `contain: paint` del escenario: se
  repintaba dentro de la superficie ampliada y dejaba un borde cuadrado visible;
- 30+ capas de composición por los `will-change` individuales;
- el montaje de la isla React y un `<video preload="auto">` intentando decodificar
  un WebM de ~9,6 MB durante el ident.

**Regla maestra:** un elemento que se escala no debe tener descendientes
animándose en ese momento. Primero termina la escena interna; luego se escala.

#### Reglas vigentes

- **Solo `transform` y `opacity`** en lo que se mueve.
- **Textura única**: las pinceladas se generan como un solo SVG `data-URI`
  (`.beam` usa `background-image: var(--beam)`), no como cientos de nodos.
  El data-URI va sin comillas en el atributo `style`, así que **hay que
  percent-encodear también los paréntesis** (`(` → `%28`, `)` → `%29`). Si no,
  el token `url()` es inválido y el navegador descarta la declaración en
  silencio (queda `background-image: none`, ya pasó).
- **Lámparas**: dos capas estáticas con `repeating-linear-gradient` y máscara
  radial. No volver a crear un nodo o una capa por lámpara ni animaciones
  infinitas.
- **Timeline sin solapes con el zoom**: pinceles, lámparas y brillo terminan
  antes de `2,15 s`. La única animación que puede seguir durante el zoom es el
  `opacity` global de las luces (se atenúa), nunca un `transform` de un hijo.
- **Zoom contenido**: `scale(7)`, no ×15. El escenario lleva
  `will-change: transform` y el logo entra dentro de `.intro__mark-wrap` con
  `overflow: hidden` + `contain: paint`. El **escenario no recorta** (`overflow`
  visible) para que el aura no muestre el borde cuadrado; las pinceladas también
  van sin recortar y se ocultan con `visibility: hidden` al final de su
  animación.
- **Logo**: `.intro__mark.logo-mark` entra con `translate3d` + `opacity`. No usar
  `clip-path` animado ni `drop-shadow` sobre el logo.
- **Brillo**: `.intro__sheen` es una capa hermana con la misma máscara y
  `.intro__sheen-bar` anima su `transform`. **Debe conservar `background: none`**:
  `.logo-mark` define `background-color: currentColor` y, si se hereda, la capa
  tapa el logo en blanco (regresión ya detectada).
- **Aura**: sin `filter: blur`; el `radial-gradient` ya es suave.
- **Prohibido en esta animación**: animar `box-shadow`, `filter`, `clip-path`,
  `background-position` o `width/height`; aplicar `mix-blend-mode` a subárboles
  animados; aplicar `filter` a un padre cuyos hijos animan (fuerza a repintar
  todo el subárbol); poner `will-change` en nodos estáticos.
- **Mientras la intro está activa**, la landing no debe animar ni cargar vídeo:
  `.netflix-hero__mark` y `.netflix-boot__mark` quedan con
  `animation-play-state: paused` y el tráiler espera al evento `intro:done`.

#### Cómo revisarla

Pausa y posiciona las animaciones con la Web Animations API:

```js
document.getAnimations().forEach((a) => a.pause())
document.getAnimations().forEach((a) => { a.currentTime = 1200 })
```

Las capturas headless con `--virtual-time-budget` no avanzan las animaciones de
forma fiable. Tampoco lo son los FPS medidos en headless: una página estática da
~52 fps de base con renderizado software.

### 5.4. Reproducción de la intro y modo Watch Now

**La intro se reproduce en cada carga o recarga de `/`.**

- No hay `sessionStorage` ni “una vez por sesión”. No reintroducirlo salvo
  petición expresa.
- Si el navegador restaura la página desde bfcache al volver atrás, no hay
  recarga y la intro no se repite. Con recarga real, sí.
- La única excepción es `prefers-reduced-motion`, por accesibilidad.
- **Watch Now** navega a `/?watch=1`. La intro se reproduce y, al terminar (o al
  pulsar “Saltar”), añade `is-entering-portfolio`, desvanece el stage y llama a
  `location.replace('/portfolio')` a los 440 ms.
- Si `?watch=1` llega con movimiento reducido, la intro se elimina y se entra
  directamente en el portfolio.
- Al terminar (o al omitirse) la intro emite `intro:done` en `window`. Ese
  evento es el que usan el hero y el tráiler para no adelantar trabajo durante
  el ident. Si se renombra, hay que actualizar `src/scripts/intro.ts` y
  `src/netflix/components/Hero.tsx` a la vez.

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

### 5.8. Tráiler del hero

- Vídeo: `/videos/CreacionLogo.webm` (~9,6 MB, VP9 + Opus). Póster:
  `/videos/CreacionLogo-poster.jpg`, un fotograma extraído del propio vídeo.
  Se usa para que el marco no quede negro mientras no hay reproducción.
- `preload="none"` y **sin `autoPlay` en el HTML**: la reproducción la dispara
  `Hero.tsx` cuando la intro ha terminado (`intro:done` o `intro-done`/
  `intro-skip` ya presentes). Así el vídeo no compite con el ident.
- **Autoplay silenciado y una sola vez** (`autoplayed` ref). Es la única forma
  que permiten los navegadores sin gesto. El vídeo no tiene `loop`.
- Mientras suena silenciado, el botón **“Activar sonido”** está en la esquina
  superior derecha (`.netflix-hero__trailer-sound`) y solo desmutea, sin
  reiniciar.
- Al terminar (`ended`) aparece **“Reproducir tráiler”** centrado
  (`.netflix-hero__trailer-replay`) y solo se repite si el usuario lo pulsa; esa
  repetición va con sonido, porque ya hay gesto.
- Si el navegador bloquea el autoplay o hay `prefers-reduced-motion`, se muestra
  directamente el botón de reproducir.
- El botón de sonido se oculta al desmutear y al terminar. No añadir controles
  nativos (`controls`) ni un segundo botón de sonido flotante.

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
9. No reintroducir carpetas de referencia ni copiar código externo sin
   justificación.
10. Respetar `prefers-reduced-motion`, el foco visible y la navegación por
    teclado.
11. **No reintroducir efectos caros en la intro**: solo `transform`/`opacity` en
    las capas animadas. Nada de `box-shadow`, `filter`, `clip-path` animado ni
    `mix-blend-mode` en subárboles que se mueven.
12. La capa `.intro__sheen` debe mantener `background: none` (ver 5.3).
13. **No volver a la intro de ~150 nodos ni al zoom ×15** (causa raíz del lag en
    5.3). Un ancestro que se escala no debe tener hijos animándose.
14. El tráiler se reproduce **una sola vez y silenciado**, con “Activar sonido”
    en la esquina; no añadir `loop` ni autoplay con sonido (ver 5.8).
15. El logo personal visible (avatar de la cabecera de Netflix y favicon de la
    pestaña) es el dorado `LogoPersonalGold.png`; no volver al JPG rojo. El logo
    de Netflix de la cabecera no es un botón ni un enlace a `#inicio`.

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
- Refactor de limpieza verificado con `tsc`, ESLint, build y Chrome headless:
  `/` hidrata la landing, `/?watch=1` acaba en `/portfolio`, `/portfolio`
  ejecuta cuenta atrás, reveal y año, y `prefers-reduced-motion` omite la intro.

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

Verificación de la iteración del 26/10/2026 (intro fluida + tráiler):

- Causa del lag reproducida y documentada en 5.3; la escena bajó de ~150 nodos a
  una docena y el zoom de ×15 a ×7.
- Timeline comprobado fotograma a fotograma con la Web Animations API (300, 450,
  620, 800, 950, 1200, 1400, 2000, 2350, 2650, 3000 y 3200 ms) en 1280 y 390 px.
- Verificado que las pinceladas se pintan de verdad: el primer intento generaba
  un `data-URI` con paréntesis sin codificar y el navegador descartaba la
  declaración (`background-image: none`). Ahora los paréntesis se percent-encodean.
- Autoplay del tráiler comprobado: arranca silenciado tras `intro:done`
  (`paused: false`, `muted: true`), “Activar sonido” desmutea sin reiniciar y al
  `ended` aparece “Reproducir tráiler” sin repetir solo.
- Póster verificado antes de la reproducción; sin él el marco quedaba negro.
- `corepack pnpm build`, Prettier y ESLint sin errores.

Resultados de la iteración del 27/10/2026 (branding y catálogo):

- Build: 2 páginas generadas (`/` y `/portfolio`), sin errores.
- `tsc --noEmit` y ESLint sin errores.
- Favicon y avatar usan `LogoPersonalGold.png`; el logo de la cabecera es una
  imagen plana sin enlace ni cursor de botón.
- Catálogo: 2 filas y 7 ediciones, con fotos reales `Velada1-6.webp` y la VII
  con `velada-7.svg`.

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
- Las carpetas de referencia locales se eliminaron; el material necesario ya
  está integrado en el proyecto.
- El tráiler pesa ~9,6 MB (WebM VP9). El autoplay silenciado lo descarga entero
  tras el ident; en conexiones lentas puede tardar en arrancar. Si se quiere
  aligerar, hay que recomprimir el vídeo y regenerar el póster con `ffmpeg`.
- No hay pruebas automatizadas de regresión visual. La intro se revisa a mano
  pausando animaciones con la Web Animations API (5.3).

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
  - que no animas hijos dentro del subárbol que hace zoom (causa raíz del lag),
  - que las pinceladas tienen textura (si `background-image: none`, revisa el
    percent-encoding del `data-URI`),
  - que `.intro__sheen` sigue con `background: none`.
- Si tocas el tráiler, comprueba que autoplay arranca silenciado una sola vez,
  que “Activar sonido” no reinicia, que al terminar aparece el botón de repetir
  y que no hay `loop` (ver 5.8).
- Si tocas Watch Now, comprueba `/?watch=1`, la intro y la entrada final en
  `/portfolio`.
- Si tocas la cabecera de la landing, respeta que el logo de Netflix no es un
  enlace y que avatar y favicon usan el logo dorado `LogoPersonalGold.png`
  (ver contrato 15).
- Si tocas la isla React, comprueba hidratación, vista rápida, ficha modal,
  filas, cabecera con scroll y responsive.
- Si tocas la navegación, comprueba atrás/adelante y las anclas del portfolio.
- Ejecuta como mínimo `corepack pnpm exec tsc --noEmit --ignoreDeprecations 6.0`,
  `corepack pnpm build` y `corepack pnpm lint`; si es posible, verifica la
  experiencia en navegador y en móvil.
- No añadas al commit archivos generados; revisa `git status --short` antes de
  publicar.
- Para inspeccionar la intro, usa el método de pausa de la Web Animations API
  descrito en 5.3; no te fíes de capturas con tiempo virtual.
- No reformatees masivamente archivos existentes ni hagas refactorizaciones
  ajenas al objetivo.

## 10. Git y publicación

- Repositorio: <https://github.com/jorgee-cc/portfolio-la-velada>
- Rama principal: `main`. Remoto `origin` por SSH:
  `git@github.com:jorgee-cc/portfolio-la-velada.git`.
- Publicado el 21/10/2026. No hay CI ni despliegue automático configurado.
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
