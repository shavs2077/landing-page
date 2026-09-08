# Asegura tu bienestar · Monserrat Velasco

Landing page de una sola vista para **Monserrat Velasco**, agente de seguros en
Guadalajara, Jalisco.

Sitio estático: HTML, CSS y ~100 líneas de JavaScript. Sin framework, sin paso de
compilación y sin dependencias que instalar.

## Correr en local

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Estructura

```
index.html                          Toda la página (anclas por sección)
assets/css/styles.css               Tokens de color/tipografía y estilos
assets/img/og.jpg                    Vista previa para redes (1200×630)
assets/js/main.js                   Menú móvil, año del pie y envío del formulario
assets/img/monserrat-retrato.webp    Retrato recortado del banner, fondo transparente
assets/img/monserrat-guadalajara.webp  Foto ambiente para la sección "Por qué elegí…"
```

## La marca

Todo está tomado de los materiales de Monserrat, no inventado:

| | |
|---|---|
| Nombre comercial | Asegura tu bienestar |
| Sage / petróleo | `#659599` — muestreado de su banner |
| Mostaza | `#F0CC7E` — muestreado de su banner |
| Petróleo profundo | `#1E4B52` — campos sólidos |
| Teléfono | 33 3166 5992 |
| Correo | contacto@aseguratubienestar.mx |
| Sitio | www.aseguratubienestar.mx |
| Ubicación | Guadalajara, Jalisco |

**Tipografía.** Outfit para títulos y logotipo (es lo más cercano en Google Fonts a
la geométrica pesada de su banner), Hanken Grotesk para texto corrido, y Newsreader
en cursiva reservada exclusivamente para cuando habla ella: la cita y la firma. Que
la cursiva signifique "su voz" es la única regla tipográfica del sitio.

**Chevrón.** Es el recurso gráfico de su identidad y aquí es el único que se repite:
detrás del retrato en la portada, como viñeta de los tres pilares y como flecha del
acordeón de preguntas. No hay iconos decorativos ni emoji.

**La copia es suya.** El titular, los tres pilares (dinero, salud, retiro → libertad,
independencia y tranquilidad), la cita de "hay historias" y la sección "Por qué elegí
esta profesión" salen de sus publicaciones, reescritas para web pero sin cambiarle
la voz ni el fondo.

## Imágenes

`monserrat-retrato.webp` se obtuvo recortando su banner y quitándole el fondo por
segmentación (blanco y chevrones fuera, componente conexa mayor dentro). Si aparece
una foto de estudio con fondo transparente, sustituirla directamente: la portada la
coloca sobre el papel cálido y no necesita ningún ajuste.

## Pendientes

Sólo quedan dos:

- **Cédula CNSF.** No aparece en los materiales. Conviene mostrarla; el lugar natural
  es junto a los datos de contacto en el pie.
- **Aseguradoras.** No hay una franja de "cotizo con" porque no se pudo confirmar con
  qué compañías tiene contrato vigente. Si se quiere agregar, revisar además los
  lineamientos de marca de cada aseguradora antes de usar logotipos.

## Formulario

No hay backend. El formulario redacta el mensaje con lo que la persona escribió y lo
abre en WhatsApp (`wa.me/523331665992`); si algún día se vacía el atributo
`data-whatsapp`, cae solo al correo con el mismo texto ya listo. Para recibir los
envíos por un servicio (Formspree, Netlify Forms), el punto a cambiar es el `submit`
en `main.js`.

## Accesibilidad y temas

- Temas claro y oscuro por tokens, incluido el estado "sistema" sin marcar.
- `prefers-reduced-motion` respetado, foco visible, salto al contenido.
- Marcado semántico y datos estructurados `InsuranceAgency` para buscadores.

## Publicar

Estático: sube tal cual a GitHub Pages, Netlify, Vercel o el hosting de
`aseguratubienestar.mx`. No requiere configuración.
