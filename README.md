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

## Reglas de diseño que sigue el archivo

La página se auditó contra [taste-skill](https://github.com/Leonxlnx/taste-skill).
Lo que eso fijó, para que no se pierda al editar:

- **Cero rayas largas.** El guion largo es la firma tipográfica más delatora de
  texto generado. En su lugar van puntos, comas o dos puntos.
- **Un solo rótulo.** "Asegura tu bienestar" en la portada es el único texto en
  mayúsculas con tracking sobre un titular. Las demás secciones arrancan con su
  titular directo.
- **Portada de cuatro elementos.** Rótulo, titular de dos líneas, subtítulo de 19
  palabras y los botones. Nada de microtiras de contacto ni de ciudad debajo: eso
  vive en la sección de contacto, que es donde se busca.
- **Un rótulo por intención.** "Escríbeme por WhatsApp" se llama igual en la barra
  superior y en la portada. Un mismo botón con dos nombres distintos confunde.
- **Sin serif.** Su identidad no tiene ninguno. El énfasis se hace con peso o
  cursiva de la misma familia, nunca metiendo otra tipografía en media frase.
- **Una escala de radios.** Pill (999px) para lo interactivo, 12px para superficies,
  8px para inputs. Sin valores sueltos.
- **Nada de tres columnas iguales.** Los pilares son un trío asimétrico de tres
  celdas exactas, con la celda ancha en fondo propio.
- **Sin numeración de pasos.** El nombre del paso es la etiqueta.
- **Errores por campo.** El mensaje va debajo de su input, no en un aviso general.
- **Un solo momento de movimiento**, la entrada de la portada, que guía el orden de
  lectura. Todo lo demás son transiciones de hover. Nada de animación por adorno.

Excepciones tomadas a conciencia:

- **El chevrón dibujado a mano.** La skill desaconseja SVG propios, pero este no es
  un icono decorativo: es la marca gráfica de su banner. Una librería de iconos no
  la tiene, y el sitio no usa empaquetador.
- **Los dos bloques petróleo** sobre página clara. Son bloques de color de marca,
  deliberados y simétricos (propósito y contacto), no un cambio de tema a media
  página. Los dos temas están tokenizados y probados.
- **Sitio estático en vez de React y Tailwind.** Para la landing de una agente sola,
  sin paso de compilación es la decisión correcta: se publica en cualquier hosting
  y se puede editar sin instalar nada.

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
