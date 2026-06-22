# Fluyir · Sistema de Diseño

> Experiencia de autoconocimiento · Instagram · Web · Blog · Substack · App

Fluyir es una **marca de autoconocimiento** en español (Argentina), construida sobre una "espiritualidad lúcida, práctica y sin dogmas". Acompaña procesos personales a través del análisis simbólico (numerología / el *Mapa Numérico*), la escritura catártica y contenidos formativos. El nombre evoca el agua que encuentra su camino — *proceso, no resultado*. La **Y** entre la U y la I no es un error: representa una decisión, romper con la estructura esperada para crear un camino propio.

Este sistema de diseño traduce esa mirada en fundamentos, componentes y recreaciones de producto reutilizables.

## Fuentes
Todo deriva de los materiales entregados por el cliente (guardados en `uploads/`):
- **`FLUYIR_Brand_Brief.docx.pdf`** — brand book de 23 páginas (esencia, productos, audiencia, voz y tono, estrategia por plataforma, identidad visual). La fuente principal.
- **Logos** — `Logo Fluyir negro/blanco`, `Iso fluyir negro/blanco` (logotipo + isologo, oscuro + crema), copiados a `assets/`.
- No se entregó código ni Figma. Este sistema cubre **fundamentos, tokens y componentes**; las recreaciones de producto (app / web) se dejaron fuera por ahora.

## Productos en este sistema
| Superficie | Rol |
|---|---|
| **App Fluyir** | Espacio privado de proceso personal sostenido (informes, cuadernos, escritura) — *en construcción* |
| **Web** | Explica el proyecto y organiza las herramientas |
| Instagram / Blog / Substack | Pensamiento público + archivo editorial — ver Fundamentos de Contenido |

---

## FUNDAMENTOS DE CONTENIDO

**Idioma.** Español, **voseo argentino** — "Probá", "Escribí", "Dejalo", "soltá". Nunca imperativos de español neutro ("Prueba", "Escribe"). Minúscula, cálido, sin apuro.

**Persona.** Le habla *a* la lectora ("vos") y comparte el pensamiento *en voz alta* — "pensamiento en voz alta", no consejos. La fundadora está presente a través de la voz y las ideas, rara vez desde la exposición.

**Voz (la entidad).** Directa · Reflexiva · Firme · Espiritual sin glitter · Con pensamiento propio · Honesta · Humana. No comunica desde el "deberías", no usa el miedo ni la urgencia, no presenta una única manera correcta.

**Tono (según contexto).** *Siempre:* claro y consciente, directo sin agresividad, profundo sin dramatismo, cercano sin perder criterio, firme sin rigidez. *Nunca:* dogmático, alarmista, paternalista, místico incomprensible, presionador, simplificador.

**La regla de las dos columnas** (ver `guidelines/voice.card.html`):

| SÍ decimos | NO decimos |
|---|---|
| "No todo lo que incomoda es para evitar." | "Descubrí tu destino." |
| "La sombra es información." | "Esto te cambiará la vida para siempre." |
| "Probá. Si no es para vos, dejalo." | "Transforma tu vida en 5 sesiones." |
| "Cuestionar también es parte del camino." | "No esperes más." |
| "No estás rota, estás procesando." | "Si no trabajás esto, se va a repetir eternamente." |

**Cada pieza debería dejar una de estas sensaciones:** tranquilidad, alivio, confianza en el propio criterio, autonomía, claridad (aunque incomode), integración de la sombra sin dramatización.

**Mayúsculas y puntuación.** Todo en *sentence case*; el logotipo siempre en minúscula (*fluyir*). Eyebrows/etiquetas pueden ir en mayúsculas con tracking amplio. Sin hype con signos de exclamación. **Sin emoji.** Las rayas (—) y los puntos suspensivos son bienvenidos — sostienen las pausas.

**Vibra.** Cinematográfica, contemplativa, intelectualmente honesta. Referencias a Jung, Tolle, Murakami, García Márquez — simbolismo, sombra, literatura. "Cada post respira." Profundidad antes que impacto rápido.

---

## FUNDAMENTOS VISUALES

**Registro general.** Oscuro, cinematográfico, contemplativo. Crema sobre azul noche es el lockup primario; todo respira. Sin saturación pop/neón, sin fondos blanco puro, sin estética spa/bienestar.

**Color** (`tokens/colors.css`, fichas en *Colors*).
- **Azul Noche `#2D3142`** — fondo principal y logo.
- **Crema `#F0EBE0`** — texto sobre oscuro, logo crema, espacios limpios.
- **Turquesa Apagado `#508075`** — **acento primario de la interfaz**: acciones, botones primarios, foco de campos, enlaces, estados activos. Frío, sereno, dentro del universo de la marca. Rampa tonal `--turquoise-900…600` para profundidad.
- **Teal Medio `#5F7E80`** — secundario, cielos, equilibrio. *(El cliente expresó reservas sobre este color — usar con moderación.)*
- **Acentos cálidos** — ámbar `#C98A4B`, durazno/glow `#E6C49A`, dorado `#CBA15A`: los "destellos de luz cálida". **Reservados para fotografía y atmósfera** (destellos de luz en las imágenes, glow de hero/citas) — *no* se usan como chrome de UI, para no competir con el turquesa. El **dorado** sí se mantiene como detalle fino en eyebrows/divisores. Los pasos tonales de superficie (`--night-700/600`, `--turquoise-700`, `--cream-200/300`) dan profundidad en una UI oscura. Los colores funcionales son apagados (salvia = éxito/disponible, ámbar = caution, terracota = **error**) — nunca brillantes.
- **Combinaciones:** *noche + crema* (primaria — profundidad y elegancia); *turquesa + crema* (alternativa — orgánica, natural).

**Tipografía** (`tokens/typography.css`, fichas en *Type*).
- **Script display** → `Amsterdam Four` (tipografía oficial de la marca, self-hosted en `assets/fonts/`) — logo, títulos hero, *frases destacadas*, firma. Fluida, femenina, escrita a mano, de trazo fino (peso único 400).
- **Sans cuerpo/UI** → `Montserrat` (la favorita del cliente; sustituye a **Corporative**) — cuerpo, navegación, carruseles, toda la interfaz.
- **Serif editorial** → `Cormorant Garamond` — blog/Substack de largo aliento y prompts reflexivos. *(Una adición del Fluyir-DS, señalada abajo — el brief rechazó Rockwell y no nombró un serif de cuerpo.)*
- La escala va de 11px→88px; pesos 300–700; interlineados amplios para lectura.

**Espaciado y layout** (`tokens/spacing.css`). Ritmo de 8px, generoso. Medida de lectura ~42rem; columna de app/formulario ~34rem; marketing ~72rem. Los layouts son calmos y sin saturar — el espacio es un valor de marca.

**Esquinas y cards.** Radios suaves y orgánicos (4→32px, más pill). Cards = superficie noche (o turquesa) elevada, radio grande (`--radius-lg` 22px), borde hairline crema de 1px, sombra profunda y silenciosa. Las cards `interactive` se elevan 2px en hover.

**Sombras.** Silenciosas y profundas para una UI oscura (`--shadow-sm…xl`), más un `--shadow-glow` cálido y moderado para momentos de acento. Brillo interno crema sutil disponible.

**Fondos e imágenes.** Atmosféricos: gradientes oscuros, **grano de película** (helper `.fl-grain`), movimiento/desenfoque como metáfora del *fluir*. El isologo 'f' aparece como watermark discreto en la esquina. La fotografía real es oscura, de baja luz, cinematográfica, con destellos de luz cálida (ámbar/durazno) — reemplazar los gradientes provisorios de las fichas/kits con fotos de marca. Los degradados de protección (`--scrim-bottom/full`) mantienen legible el texto crema sobre imágenes.

**Movimiento.** Lento, como agua. Ease-out suave (`--ease-flow`), duraciones 140–720ms, fundidos antes que rebotes. Nada elástico.

**Estados.** El hover profundiza rellenos / aclara contornos (turquesa → turquesa suave); los enlaces van a turquesa claro. El press escala a ~0.98 (un asentamiento silencioso, sin encogimiento brusco). Foco = anillo turquesa de 2px, offset 2px. Deshabilitado = 45% de opacidad.

**Transparencia y blur.** Usados sobre capas atmosféricas y chrome (la tab bar usa `backdrop-filter` sobre una noche translúcida). Los bordes son crema al 8–20% de alfa en lugar de líneas sólidas.

---

## ICONOGRAFÍA

El brand brief no especifica **ningún set de íconos** — el lenguaje visual de Fluyir es fotográfico y tipográfico, no iconográfico. Para mantener las UIs limpias y on-brand, este sistema usa un **set pequeño y curado de íconos de línea dibujados inline** en los kits (`screens.jsx`, `sections.jsx`): trazo fino de 1.6px, terminaciones redondeadas, grilla de 24px — silencioso y editorial, acompañando el peso de Montserrat. Son deliberadamente escasos (home, mapa, lápiz, libro, flecha, luna, destello).

- **No existe icon font ni sprite** en la fuente — no se entregó ninguno.
- **Sin emoji.** La marca evita explícitamente el lenguaje visual decorativo/pop; el emoji se leería como off-brand.
- **Sin pictogramas Unicode** usados como íconos.
- Si hiciera falta un set más denso, sustituir por una familia open-source de trazo fino (ej. **Lucide** / **Feather**, ~1.5–2px de trazo) para que combine — y señalar la elección. Evitar estilos de íconos rellenos/duotono.
- El **isologo 'f'** funciona como marca/watermark de la firma, no como ícono de UI — mantenerlo crema, nunca recoloreado sobre fotos.

---

## TIPOGRAFÍA — estado
Las fuentes en `tokens/fonts.css`:
- **Amsterdam Four** — tipografía oficial de la marca, **self-hosted** (`assets/fonts/amsterdam-four.ttf`, entregada por el cliente). Peso único 400 (trazo fino) — el sistema la usa siempre en 400, sin faux-bold.
- **Corporative → Montserrat** (sans, Google Fonts). La nombraste como tu favorita, así que es una elección intencional, no un fallback. Si querés la Corporative real, mandame los archivos y la cambio.
- **Serif editorial → Cormorant Garamond** (Google Fonts) — mi adición para largo aliento (Rockwell fue rechazada). Sacala o reemplazala si no la querés.

> ⚠️ Montserrat y Cormorant cargan desde el CDN de Google Fonts (el compilador solo cuenta el `@font-face` self-hosted de Amsterdam Four). Si necesitás todo offline/self-hosted, mandame los archivos y agrego `@font-face` con `src` local.

---

## ÍNDICE — qué hay en esta carpeta

**Raíz**
- `styles.css` — punto de entrada global (importá solo este archivo).
- `readme.md` — esta guía. `SKILL.md` — manifiesto portable de Agent-Skill.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`components/core/`** — primitivos React, cada uno con `.jsx` + `.d.ts` + `.prompt.md`:
`Button`, `Input`, `Textarea`, `Card`, `Badge`, `Tag`, `Avatar`, `Logo`, `ScriptQuote`. Showcase: `core.card.html`.

**`guidelines/`** — fichas de fundamentos (pestaña Design System): colores (core/warm/surfaces/functional), tipografía (script/sans/serif), espaciado (scale/radii/shadows), marca (logo/combinations/voice/imagery).

**`assets/`** — `logo-wordmark-cream.png`, `logo-wordmark-dark.png`, `iso-f-cream.png`, `iso-f-dark.png`.

**`uploads/`** — materiales originales del cliente (brand brief PDF + logos).
