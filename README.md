# Monserrat Velasco · Seguros

Landing page de una sola vista para **Monserrat Velasco**, agente de seguros
independiente en Guadalajara, Jalisco.

Sitio estático: HTML, CSS y ~90 líneas de JavaScript. Sin framework, sin paso de
compilación y sin dependencias que instalar.

## Correr en local

Cualquier servidor estático sirve. Por ejemplo:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

También se puede abrir `index.html` directamente en el navegador.

## Estructura

```
index.html              Toda la página (una sola vista, anclas por sección)
assets/css/styles.css   Tokens de color/tipografía y estilos
assets/js/main.js       Menú móvil, año del pie y envío del formulario
assets/img/             Aquí va la fotografía de Monserrat
```

## Datos provisionales — pendientes de confirmar

La página está armada con contenido de trabajo. Antes de publicarla hay que
sustituir estos puntos (todos aparecen tal cual en el código, son fáciles de
buscar):

| Qué | Dónde | Marcador actual |
|---|---|---|
| Cédula CNSF | `index.html` (hero, credenciales y pie) | `A-XXXXXX` |
| Número de WhatsApp | `index.html`, atributo `data-whatsapp` del formulario y bloque de contacto | `PENDIENTE` / `+52 33 XXXX XXXX` |
| Correo | `index.html` y constante `CORREO` en `main.js` | `hola@monserratvelasco.mx` |
| Fotografía | `assets/img/` | Ver abajo |
| Aseguradoras | Sección "Cotizo con" | Lista tentativa |
| Ramos autorizados y horario | Bloque "Datos del agente" | Tentativos |

### Fotografía

El hero tiene un plano macizo con las iniciales mientras no haya foto. Para
poner la real: guarda un retrato vertical (proporción 4:5, mínimo 800×1000 px)
como `assets/img/monserrat.jpg` y cambia el bloque `.retrato__slot` por:

```html
<img class="retrato__slot" src="assets/img/monserrat.jpg"
     width="800" height="1000" alt="Monserrat Velasco, agente de seguros">
```

### Aseguradoras

La lista de la franja "Cotizo con" es tentativa. Hay que dejar únicamente las
compañías con las que Monserrat tenga contrato de agente vigente, y revisar los
lineamientos de uso de marca de cada una si en algún momento se usan logotipos
en vez de texto.

## Formulario

No hay backend. El formulario compone el mensaje con lo que la persona escribió
y lo abre en WhatsApp (`wa.me`). Mientras `data-whatsapp` siga en `PENDIENTE`,
cae al correo con el mismo mensaje ya redactado, así que funciona desde ahora.

Si más adelante se quiere recibir los envíos por correo con un servicio (Formspree,
Netlify Forms y similares), el punto a cambiar es el `submit` en `main.js`.

## Decisiones de diseño

- **Paleta de cantera.** El neutro de fondo lleva un sesgo rosado hacia el
  acento, en lugar del gris plano de plantilla. El plano carmín (`#8C2242`)
  toma la idea de los muros macizos de color de la arquitectura tapatía, y
  aparece dos veces: retrato y contacto. No se usa azul de aseguradora.
- **Tipografía.** Piazzolla (Huerta Tipográfica) para títulos, Archivo para
  texto e IBM Plex Mono para cédula, numeración y etiquetas — los seguros son
  papeleo, y los números deberían verse como documento.
- **Nada de tarjetas por default.** Los ramos son un índice con filetes; la
  comparación es una tabla real; el proceso lleva numeración sólo porque
  contratar una póliza sí es una secuencia.
- **Vocabulario propio del ramo.** Deducible, coaseguro y su tope, tabulador,
  preexistencias, carta de antigüedad, periodo de gracia de 30 días naturales
  (Ley sobre el Contrato de Seguro). Es el contenido que distingue a una agente
  de un formulario de cotización.

## Accesibilidad y temas

- Se adapta al tema claro/oscuro del sistema y respeta `prefers-reduced-motion`.
- Marcado semántico con `main`, `section`, `table` con encabezados, `details`
  para las preguntas frecuentes, salto al contenido y foco visible.

## Publicar

Al ser estático, se puede subir tal cual a GitHub Pages, Netlify, Vercel o
cualquier hosting. No requiere configuración.
