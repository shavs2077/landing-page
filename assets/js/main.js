/* Monserrat Velasco · Seguros — interacciones mínimas, sin dependencias. */
(function () {
  "use strict";

  /* --- Menú en pantallas chicas ---------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-principal");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var abierto = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(abierto));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* --- Año en el pie ---------------------------------------------------- */
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = String(new Date().getFullYear());

  /* --- Formulario: compone el mensaje y lo manda por WhatsApp ----------- */
  var form = document.getElementById("form-contacto");
  var status = document.getElementById("form-status");
  if (!form) return;

  var CORREO = "hola@monserratvelasco.mx";

  function redactar(datos) {
    var lineas = [
      "Hola Monserrat, soy " + datos.nombre + ".",
      "Me interesa: " + datos.ramo + ".",
      "Mi teléfono: " + datos.telefono + "."
    ];
    if (datos.mensaje) lineas.push("", datos.mensaje);
    lineas.push("", "(Enviado desde tu sitio web)");
    return lineas.join("\n");
  }

  function marcar(campo, invalido) {
    if (invalido) campo.setAttribute("aria-invalid", "true");
    else campo.removeAttribute("aria-invalid");
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nombre = form.elements.nombre;
    var telefono = form.elements.telefono;
    var faltantes = [];

    [nombre, telefono].forEach(function (campo) {
      var vacio = campo.value.trim() === "";
      marcar(campo, vacio);
      if (vacio) faltantes.push(campo);
    });

    if (faltantes.length) {
      status.textContent = "Necesito tu nombre y un teléfono para poder contestarte.";
      faltantes[0].focus();
      return;
    }

    var texto = redactar({
      nombre: nombre.value.trim(),
      telefono: telefono.value.trim(),
      ramo: form.elements.ramo.value,
      mensaje: form.elements.mensaje.value.trim()
    });

    var numero = (form.dataset.whatsapp || "").replace(/\D/g, "");

    if (numero.length >= 10) {
      status.textContent = "Abriendo WhatsApp con tu mensaje listo…";
      window.open("https://wa.me/" + numero + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
      return;
    }

    /* Sin número configurado todavía: el mensaje se va por correo. */
    status.textContent =
      "El WhatsApp todavía no está configurado en este sitio. Abrí tu correo con el mensaje listo para enviar.";
    window.location.href =
      "mailto:" + CORREO +
      "?subject=" + encodeURIComponent("Cotización: " + form.elements.ramo.value) +
      "&body=" + encodeURIComponent(texto);
  });
})();
