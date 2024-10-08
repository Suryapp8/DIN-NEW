// src/data/products.js

import vermicompostImage from "../images/VermiCommix.jpg"; // Import the image
import decNeemo from "../images/DecNeemo.jpg"; // Import the image
import DecMori from "../images/DecMori.jpg"; // Import the image
import AgniShield from "../images/AgniShield.jpg"; // Import the image

export const products = [
  {
    id: 1,
    name: "Vermicompost",
    Size: "1kg",
    description:
      "Improves soil structure, enriches with micro-organisms, and helps in root development.",
    price: 300,
    image: vermicompostImage,
  },
  {
    id: 2,
    name: "Vermicompost Mixture",
    Size: "1 Litre",
    description:
      "Enriched with Neem, Trichoderma, and Mustard Cake. Ideal for soil fertility and root health.",
    price: 350,
    image: vermicompostImage,
  },
  {
    id: 3,
    name: "Dec-Neemo (Bio-fertilizer)",
    Size: "1 Kg",
    description:
      "Liquid fertilizer for protecting plants from pests, enhancing soil richness.",
    price: 400,
    image: decNeemo,
  },
  {
    id: 4,
    name: "Dec-Mori (Bio-fertilizer)",
    Size: "1 Litre",
    description:
      "Bio-fertilizer with Moringa for enhanced growth and nutrient intake.",
    price: 450,
    image: DecMori,
  },
  {
    id: 4,
    name: "Dec-Mori (Bio-fertilizer)",
    Size: "1 Litre",
    description:
      "Bio-fertilizer with Moringa for enhanced growth and nutrient intake.",
    price: 450,
    image: AgniShield,
  },
  
];
