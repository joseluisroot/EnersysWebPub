// js/app.js

// Lista de contenedores a montar en orden
const components = [
  "header",
  "hero",
  "logos",
  "ecosystem",
  "generacion",
  "almacenamiento",
  "transporte",
  /*"casos-exito",*/
  "footer"
];

// Función para montar un componente
async function mountComponent(name, mountEl) {
  const basePath = `containers/${name}`;
  const htmlUrl = `${basePath}/index.html`;
  const jsUrl = `${basePath}/script.js`;

  // Cargar HTML del contenedor
  try {
    const html = await fetch(htmlUrl).then(r => r.text());
    mountEl.innerHTML = html;
  } catch {
    console.warn(`[${name}] No se pudo cargar ${htmlUrl}`);
  }

  // Inyectar CSS
  try {
    const resp = await fetch(cssUrl, { method: "HEAD" });
    if (resp.ok) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);
    }
  } catch {}

  // Ejecutar JS 
  try {
    const resp = await fetch(jsUrl, { method: "HEAD" });
    if (resp.ok) {
      await import(`../${jsUrl}`);
    }
  } catch {
    // Si no existe script, no pasa nada
  }
}

// Montaje secuencial
(async () => {
  const mounts = document.querySelectorAll("[data-component]");
  for (const el of mounts) {
    const name = el.getAttribute("data-component");
    if (components.includes(name)) {
      await mountComponent(name, el);
    }
  }

      initSplide();

  // Inicializaciones globales
  if (window.AOS) AOS.init({ duration: 1000, once: true });
})();


function initSplide() {
  const el = document.querySelector("#splideCamiones");

  if (!el) {
    console.warn("Splide no encontró el carrusel todavía.");
    return;
  }

  if (el.classList.contains("is-active")) {
    console.log("⚠️ Splide ya está activo.");
    return;
  }

  console.log("✅ Inicializando Splide...");

  try {
    new Splide(el, {
      type: "loop",
      perPage: 3,
      focus: "center",
      arrows: true,
      pagination: false,
      speed: 800,
      breakpoints: {
        767: {
          perPage: 1,
          focus: "center",
        },
      },
    }).mount();
  } catch (e) {
    console.error("❌ Error al inicializar Splide:", e);
  }
}
