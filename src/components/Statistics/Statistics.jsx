import "./StatisticsComponent.css";
import { Divider } from "@nextui-org/react";
import { TbSquareRoundedNumber1Filled } from "react-icons/tb";

import { FaHandsHelping, FaLightbulb } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";

function Statistics() {
  const stats = [
    {
      icon: <FaHandsHelping />,
      title: "Emprededores",
      description:
        "Hemos brindado apoyo a más de 8000 actores de la economía popular",
    },
    {
      icon: <MdStarRate />,
      title: "Opinión",
      description:
        "Nuestra calificación promedio de 4.5 refleja la satisfacción constante de nuestros usuarios.",
    },
    {
      icon: <TbSquareRoundedNumber1Filled />,
      title: "Posición",
      description:
        "Somos los mejores conectando oportunidades con emprendedores",
    },
    {
      icon: <FaLightbulb />,
      title: "Ideas Implementadas",
      description:
        "Hemos convertido más de 50 ideas innovadoras en realidades exitosas",
    },
    {
      icon: <LiaPeopleCarrySolid />,
      title: "Equipo Comprometido",
      description:
        "Valoramos sus opiniones, ofreciendo una experiencia que mejora continuamente",
    },
  ];

  return (
    <div>
      <h2 className="statistics-title">Nuestras Cifras</h2>
      <div className="statistics-container">
        {stats.map((stat, index) => (
          <div key={index} className="statistic">
            <div style={{ fontSize: "50px", color: "#009ee2" }}>
              {stat.icon}
            </div>
            <h3>{stat.title}</h3>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
