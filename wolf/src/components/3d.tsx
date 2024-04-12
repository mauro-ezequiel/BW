import React from "react";

import { Bar } from "./bar";
import { Buttom } from "./buttom";

import "../style/venta.scss";

// Interface for Material data
interface Material {
  img: string;
  title: string;
  text: string;
  price: number;
  link: string;
}

// Material data
const materials: Material[] = [
  {
    img: "https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg",
    title: "Filamento PLA",
    text: "Biodegradable, fácil de imprimir, bajo olor, baja resistencia. Muy utilizado.",
    price: 200,
    link: "https://www.youtube.com/watch?v=Ah0Ys50CqO8&list=RDS2dRcipMCpw&index=5",
  },

  {
    img: "https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg",
    title: "Filamento PLA",
    text: "Biodegradable, fácil de imprimir, bajo olor, baja resistencia. Muy utilizado.",
    price: 200,
    link: "https://www.youtube.com/watch?v=Ah0Ys50CqO8&list=RDS2dRcipMCpw&index=5",
  },

  {
    img: "https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg",
    title: "Filamento PLA",
    text: "Biodegradable, fácil de imprimir, bajo olor, baja resistencia. Muy utilizado.",
    price: 200,
    link: "https://www.youtube.com/watch?v=Ah0Ys50CqO8&list=RDS2dRcipMCpw&index=5",
  },

  {
    img: "https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg",
    title: "Filamento PLA",
    text: "Biodegradable, fácil de imprimir, bajo olor, baja resistencia. Muy utilizado.",
    price: 200,
    link: "https://www.youtube.com/watch?v=Ah0Ys50CqO8&list=RDS2dRcipMCpw&index=5",
  },

  {
    img: "https://d22fxaf9t8d39k.cloudfront.net/06e76cf7b7a02d9d2777d8bda55bd8261634966bd988abd190b96ac8256b22a132164.jpeg",
    title: "Filamento PLA",
    text: "Biodegradable, fácil de imprimir, bajo olor, baja resistencia. Muy utilizado.",
    price: 200,
    link: "https://www.youtube.com/watch?v=Ah0Ys50CqO8&list=RDS2dRcipMCpw&index=5",
  },

  // ... Más materiales
];

// Card component
const Card: React.FC<Material> = ({ img, title, text, price, link }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img-top" />
      <div className="card-body">
        <h3>{title}</h3>
        <p className="card-text">{text}</p>
        <p className="price">{price} $</p>

        <a href={link}>
          <button>comprar</button>
        </a>
      </div>
    </div>
  );
};

export const Impresion: React.FC = () => {
  return (
    <div id="container-venta">
      <Bar />
      <h1 id="title">IMPRESION 3D</h1>
      <div className="grid">
        {materials.map((material) => (
          <Card key={material.title} {...material} />
        ))}
      </div>
      <Buttom />
    </div>
  );
};
