import eslintPluginAstro from 'eslint-plugin-astro'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
  // Carpetas de referencia originales (exportaciones de CodePen): no forman
  // parte del código Astro que se compila ni se mantiene en este proyecto.
  globalIgnores([
    '.vercel/',
    'dist/',
    'netflix-intro-animation-pure-css/',
    'react-dailyui003landing-page/',
  ]),
])
