/* Asegura tu bienestar · Monserrat Velasco — interacciones mínimas, sin dependencias. */
(function () {
  "use strict";

  var CORREO = "contacto@aseguratubienestar.mx";

  /* --- Menú en pantallas chicas ---------------------------------------- */
  var boton = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");

  if (boton && nav) {
    boton.addEventListener("click", function () {
      var abierto = nav.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", String(abierto));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("abierto")) {
        nav.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
        boton.focus();
      }
    });
  }

  /* --- Año en el pie ---------------------------------------------------- */
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());

  /* --- Formulario: redacta el mensaje y lo abre en WhatsApp -------------- */
  var forma = document.getElementById("forma");
  var aviso = document.getElementById("forma-aviso");
  if (!forma) return;

  function redactar(d) {
    var lineas = [
      "Hola Monserrat, soy " + d.nombre + ".",
      "Me interesa: " + d.ramo + ".",
      "Mi teléfono: " + d.telefono + "."
    ];
    if (d.mensaje) lineas.push("", d.mensaje);
    lineas.push("", "(Enviado desde aseguratubienestar.mx)");
    return lineas.join("\n");
  }

  forma.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = forma.elements.nombre;
    var telefono = forma.elements.telefono;
    var faltantes = [];

    [nombre, telefono].forEach(function (campo) {
      var vacio = campo.value.trim() === "";
      if (vacio) { campo.setAttribute("aria-invalid", "true"); faltantes.push(campo); }
      else campo.removeAttribute("aria-invalid");
    });

    if (faltantes.length) {
      aviso.textContent = "Necesito tu nombre y un teléfono para poder contestarte.";
      faltantes[0].focus();
      return;
    }

    var texto = redactar({
      nombre: nombre.value.trim(),
      telefono: telefono.value.trim(),
      ramo: forma.elements.ramo.value,
      mensaje: forma.elements.mensaje.value.trim()
    });

    var numero = (forma.dataset.whatsapp || "").replace(/\D/g, "");

    if (numero.length >= 10) {
      aviso.textContent = "Abriendo WhatsApp con tu mensaje listo…";
      window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
      return;
    }

    aviso.textContent = "Abrí tu correo con el mensaje listo para enviar.";
    window.location.href = "mailto:" + CORREO +
      "?subject=" + encodeURIComponent("Cotización: " + forma.elements.ramo.value) +
      "&body=" + encodeURIComponent(texto);
  });
})();
