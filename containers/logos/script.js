// Ruta a la carpeta donde están los logos
const logosPath = "assets/images/logos/";

// Lista de logos
const logos = [
    "hb_logo.png",
    "hilasal_logo.png",
    "ivan_logo.png",
    "jhill_logo.png",
    "kinetika_logo.png",
    "l_logo.png",
    "lactolac_logo.png",
    "majada_logo.png",
    "mercosal_logo.png",
    "ojos_logo.png",
    "parque_industrial_logo.png",
    "pasares_logo.png",
    "plasal_logo.png",
    "plaza_mundo_logo.png",
    "puma_logo.png",
    "quality_grains_logo.png",
    "raf_logo.png",
    "ransa_logo.png",
    "summa_logo.png",
    "surf_logo.png",
    "tacoplast_logo.png",
    "tecnutral_logo.png",
    "texaco_logo.png",
    "toto_logo.png",
    "uees_logo.png",
    "union_logo.png",
    "zona_franca_logo.png",
];

// Contenedor donde se insertarán los logos
const logosContainer = document.getElementById("logos-container");
const logosMarquee = document.getElementById("logos-marquee");

// 1) Insertar los logos una vez
logos.forEach((filename) => {
    const img = document.createElement("img");
    img.src = logosPath + filename;
    img.alt = filename.replace(".png", "");
    img.className = "logo-item";
    logosContainer.appendChild(img);
});

// 2) Duplicar el contenido para crear el efecto infinito
// Esto hace que la tira se repita sin cortes visuales
logosContainer.innerHTML += logosContainer.innerHTML;

// 3) Lógica para pausar / reanudar la animación

const pauseAnimation = () => {
    logosContainer.classList.add("paused");
};

const resumeAnimation = () => {
    logosContainer.classList.remove("paused");
};

// Desktop: hover
logosMarquee.addEventListener("mouseenter", pauseAnimation);
logosMarquee.addEventListener("mouseleave", resumeAnimation);

// Móvil / táctil: touch y pointer
logosMarquee.addEventListener("touchstart", pauseAnimation, { passive: true });
logosMarquee.addEventListener("touchend", resumeAnimation);
logosMarquee.addEventListener("touchcancel", resumeAnimation);

logosMarquee.addEventListener("pointerdown", pauseAnimation);
logosMarquee.addEventListener("pointerup", resumeAnimation);
logosMarquee.addEventListener("pointercancel", resumeAnimation);
