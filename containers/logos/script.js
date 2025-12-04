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

logos.forEach(filename => {
  const img = document.createElement("img");
  img.src = logosPath + filename;
  img.alt = filename.replace(".png", "");
  img.className = "logo-item";
  logosContainer.appendChild(img);
});
