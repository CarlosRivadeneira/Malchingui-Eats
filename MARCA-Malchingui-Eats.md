# Malchingui Eats — Especificación de marca para implementación

Implementa en toda la aplicación la identidad visual de **Malchingui Eats**, una app de delivery de comida con un enfoque comercial y familiar. Todo debe transmitir **cercanía, confianza, calidez y alegría**. Usa exactamente los valores de este documento. No inventes colores, fuentes ni radios que no estén aquí.

---

## 1. Design tokens

Crea un archivo central de tokens (por ejemplo `src/styles/tokens.css`) y haz que todos los componentes lo usen. No escribas colores ni tamaños directamente en los componentes.

```css
:root {
  /* Colores de marca */
  --color-primary: #F26B1D;        /* Naranja Malchingui: logo, botones principales, llamados a la acción */
  --color-primary-hover: #D95A12;
  --color-primary-text: #B5470A;   /* Naranja oscuro accesible: enlaces y texto naranja sobre fondos claros */
  --color-accent: #FFC23C;         /* Amarillo Miel: corazón del logo, promociones, badges */
  --color-ink: #2E1B10;            /* Café Cacao: texto principal y fondos oscuros */
  --color-ink-soft: #6B4A36;       /* Café Tostado: texto secundario y descripciones */
  --color-bg: #FFF7EE;             /* Crema Hogar: fondo principal de la app */
  --color-surface: #FFFFFF;        /* Tarjetas, modales y hojas inferiores */
  --color-border: #F0DCC8;         /* Bordes suaves y divisores */
  --color-on-primary: #FFFFFF;
  --color-on-dark-accent: #FF8A45; /* Naranja claro para "Eats" y acentos sobre fondo café */

  /* Estados */
  --color-success: #2E7D32;
  --color-error: #C62828;

  /* Tipografía */
  --font-display: "Fredoka", "Nunito", system-ui, sans-serif; /* títulos, precios, botones, logo */
  --font-body: "Nunito", system-ui, sans-serif;               /* texto general */

  --text-display: 40px;   /* Fredoka 700 */
  --text-title: 28px;     /* Fredoka 600 */
  --text-subtitle: 22px;  /* Fredoka 600 */
  --text-body: 16px;      /* Nunito 400, line-height 1.5 */
  --text-body-lg: 18px;   /* Nunito 400 */
  --text-label: 14px;     /* Nunito 700 */

  /* Radios: la marca es redondeada y amable */
  --radius-sm: 12px;
  --radius-md: 20px;      /* tarjetas */
  --radius-lg: 24px;      /* hojas, modales, banners */
  --radius-pill: 999px;   /* botones, chips, badges */
  --radius-icon: 25%;     /* ícono de app (30/120) */

  /* Espaciado (base 4) */
  --space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
  --space-5: 20px; --space-6: 24px; --space-8: 32px; --space-10: 40px;

  /* Sombras: suaves, tono café, nunca negras ni duras */
  --shadow-card: 0 6px 20px rgba(46, 27, 16, 0.10);
  --shadow-float: 0 10px 30px rgba(46, 27, 16, 0.16);
}
```

Carga las fuentes desde Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
```

Si el proyecto usa Tailwind, define los mismos valores en `tailwind.config` (`theme.extend.colors`, `fontFamily`, `borderRadius`, `boxShadow`) con estos nombres: `primary`, `primary-hover`, `primary-text`, `accent`, `ink`, `ink-soft`, `bg`, `surface`, `border`. Si es React Native o Flutter, crea un objeto `theme` con los mismos nombres y valores.

---

## 2. Reglas de color

- Proporción en pantalla: **50% crema, 25% naranja, 15% café y 10% amarillo**.
- El fondo general es `--color-bg` (crema), nunca blanco puro. Las tarjetas sí son blancas.
- **Accesibilidad (obligatorio):**
  - El texto blanco sobre `#F26B1D` tiene un contraste de 3.05:1. Úsalo solo en texto grande: 18.66 px en negrita o 24 px en adelante. Por eso los botones llevan texto de 18 px en adelante con peso 700.
  - El texto pequeño en naranja sobre fondos claros usa `--color-primary-text` (#B5470A, 5.1:1).
  - El texto principal usa `--color-ink` (15.5:1 sobre crema). El secundario usa `--color-ink-soft` (7.5:1).
  - Sobre amarillo, el texto siempre es `--color-ink`.
- No uses degradados, neones ni otros colores fuera de la paleta.

---

## 3. Tipografía

| Uso | Fuente | Peso | Tamaño |
|---|---|---|---|
| Títulos de pantalla | Fredoka | 700 | 28–40 px |
| Subtítulos, nombres de restaurantes | Fredoka | 600 | 20–22 px |
| Precios | Fredoka | 600 | 18–22 px |
| Botones | Fredoka | 600–700 | 18–20 px |
| Texto de lectura | Nunito | 400 | 16–18 px, line-height 1.5 |
| Etiquetas y metadatos | Nunito | 700 | 14 px |

No uses fuentes serif, cursivas decorativas ni todo en mayúsculas en los textos. Solo las etiquetas pequeñas de sección pueden ir en mayúsculas, con `letter-spacing: 2px`.

---

## 4. Logo e ícono

### Ícono (SVG oficial; úsalo tal cual como componente `<BrandIcon size={n} />`)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" role="img" aria-label="Malchingui Eats">
  <rect width="120" height="120" rx="30" fill="#F26B1D"/>
  <path d="M22 58 L60 26 L98 58" fill="none" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M60 59 C51 53 49 46 53.5 42.5 C56.5 40.5 60 42 60 45.5 C60 42 63.5 40.5 66.5 42.5 C71 46 69 53 60 59 Z" fill="#FFC23C"/>
  <path d="M30 66 H90 A30 30 0 0 1 30 66 Z" fill="#FFFFFF"/>
  <path d="M47 76 Q60 85 73 76" fill="none" stroke="#F26B1D" stroke-width="4.5" stroke-linecap="round"/>
</svg>
```

Significado: el **techo** es el hogar, el **plato sonriente** es la comida que alegra y el **corazón amarillo** es el cariño y la confianza.

Variante monocromática, para fondo naranja: el fondo es `#FFFFFF`, el techo y el plato son `#F26B1D`, y el corazón y la sonrisa son `#F26B1D`.

### Logo completo (componente `<BrandLogo variant="horizontal|stacked" theme="light|dark" />`)

- **Horizontal:** el ícono va a la izquierda. A la derecha va el texto en dos líneas: "Malchingui" en `--color-ink` y "Eats" en `--color-primary`. Fuente Fredoka 700, line-height 1.02. El tamaño de letra es el 42% de la altura del ícono y la separación entre ícono y texto es el 20% de esa altura.
- **Apilada:** el ícono va arriba y debajo, en una sola línea centrada, "Malchingui **Eats**".
- **Tema oscuro** (fondo `--color-ink`): "Malchingui" en `--color-bg` y "Eats" en `--color-on-dark-accent`.
- Espacio libre alrededor del logo: como mínimo la altura del corazón, más o menos el 15% de la altura del ícono, en los cuatro lados.
- Tamaño mínimo: ícono de 24 px y logo horizontal de 120 px de ancho.
- Eslogan, opcional junto al logo: **"Sabor de casa, hasta tu puerta"**.

### Prohibido

No estirar ni deformar el logo, no cambiar sus colores, no rotarlo, no añadirle sombras, contornos ni desenfoques, no ponerlo sobre fondos de poco contraste (por ejemplo, naranja sobre naranja) y no cambiar su tipografía.

### Assets a generar

- `favicon.svg`, con el SVG oficial.
- Íconos PWA de 192 y 512 px, en versión normal y `maskable` (en la maskable, el fondo naranja ocupa todo el lienzo).
- `apple-touch-icon` de 180 px.
- `theme-color: #F26B1D` y `background_color: #FFF7EE` en el manifest.

---

## 5. Componentes

**Botón primario:** fondo `--color-primary`, texto blanco, Fredoka 600 de 18–20 px, `border-radius: var(--radius-pill)`, padding de 14 px por 28 px y altura mínima de 48 px. En hover, `--color-primary-hover`. En foco, `outline: 3px solid var(--color-accent); outline-offset: 2px`. Cuando está deshabilitado, opacidad 0.45.

**Botón secundario:** fondo transparente, borde de 2 px en `--color-ink`, texto `--color-ink` y la misma forma que el primario.

**Chip o badge de promoción** (por ejemplo "Envío gratis" o "2x1"): fondo `--color-accent`, texto `--color-ink`, Fredoka 600 de 14–16 px, radio pill y padding de 6 px por 14 px.

**Tarjeta de restaurante o producto:** fondo `--color-surface`, `--radius-md`, `--shadow-card` y padding de 16 px. La imagen va arriba con radio de 16 px y `object-fit: cover`. Debajo va el nombre en Fredoka 600 de 20 px, luego los metadatos en Nunito 700 de 14 px y `--color-ink-soft` (tiempo · costo de envío · calificación), y el precio en Fredoka 600.

**Barra superior:** fondo `--color-bg` o `--color-surface` con el logo horizontal a 32–40 px de altura. En pantallas oscuras, fondo `--color-ink` con el logo en tema oscuro.

**Navegación inferior:** fondo blanco y borde superior de 1 px en `--color-border`. Los íconos son de línea redondeada (stroke 2, linecap round). El ítem activo va en `--color-primary` con una etiqueta en Nunito 700, y los inactivos en `--color-ink-soft`.

**Inputs:** fondo blanco, borde de 2 px en `--color-border`, `--radius-sm` y altura de 48 px. En foco, el borde pasa a `--color-primary`. Cada input tiene un `<label>` visible.

**Notificaciones y toasts:** fondo blanco, `--radius-md` y `--shadow-float`. Llevan el ícono de la marca a 40–56 px, el título en Nunito 800 y el mensaje en `--color-ink-soft`.

**Estados vacíos y de carga:** usa el ícono de la marca con una animación suave, por ejemplo el corazón subiendo como vapor. Nada de spinners genéricos.

**Iconografía general:** íconos de línea con terminaciones redondeadas, como Lucide o Phosphor Rounded. No uses emojis como íconos de interfaz.

**Accesibilidad:** los objetivos táctiles miden al menos 44×44 px. Usa elementos semánticos (`<button>`, `<a>`, `<label>`). Los botones que solo tienen ícono llevan `aria-label`.

---

## 6. Tono de voz (textos de la interfaz)

Hablamos como un vecino de confianza: con calidez y claridad, tuteando con respeto y celebrando los momentos en familia. Evitamos los tecnicismos y la presión.

- ✅ "¡Tu almuerzo ya va en camino! Llega calientito en 20 minutos."
- ✅ "Algo salió mal con tu pedido. Ya lo estamos resolviendo."
- ✅ "¡Tu pedido llegó! Que lo disfruten en familia."
- ❌ "ERROR 504: transacción no procesada."
- ❌ "¡¡ÚLTIMA OPORTUNIDAD!! Compra YA."

Los mensajes de error explican qué pasó y qué hacer, sin culpar al usuario. Usa signos de apertura (¡ ¿) y nada de mayúsculas sostenidas.

---

## 7. Checklist de implementación

1. Crear los tokens (CSS, Tailwind o theme) y cargar las fuentes Fredoka y Nunito.
2. Crear los componentes `BrandIcon` y `BrandLogo` con sus variantes.
3. Generar el favicon, los íconos PWA y de iOS, y configurar `theme-color`.
4. Aplicar el fondo crema global y la tipografía base (Nunito 16 px, color `--color-ink`).
5. Reemplazar todos los botones, chips, tarjetas, inputs, la navegación y los toasts por las versiones de la sección 5.
6. Revisar el contraste de todo el texto según la sección 2.
7. Reescribir los textos de la interfaz con el tono de la sección 6.
8. Buscar y eliminar colores, fuentes o radios escritos directamente en los componentes que no salgan de los tokens.
