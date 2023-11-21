import React from 'react';
import './AboutUs.css';
import { Divider } from '@nextui-org/react';
import Partners from "../../components/Partners/Partners";

export default function AboutUs() {
  return (

    <div>


    <div className="about-us">
      <h1>Quiénes Somos</h1>
      <p className="intro">
      ElQueb es una iniciativa dedicada a impulsar y fortalecer la economía local a través de la innovación, la colaboración y el desarrollo sostenible. Nos comprometemos a fomentar un entorno económico próspero que beneficie a comunidades en todo el mundo.

Creemos en la fuerza de la cooperación internacional y en el poder transformador de las ideas innovadoras. Trabajamos junto a empresas, organizaciones y líderes visionarios para crear soluciones integrales que impulsen el crecimiento económico equitativo y sostenible.

Nuestro enfoque se centra en identificar oportunidades emergentes, promover la inclusión financiera y tecnológica, así como en fomentar el desarrollo de habilidades en las comunidades.

      </p>
      <section>
        <h2>Nuestra Misión</h2>
        <p>
        Nuestra misión en  es impulsar una economía local inclusiva y sostenible. Nos dedicamos a fomentar la innovación, la colaboración y el desarrollo para crear oportunidades equitativas y sostenibles que beneficien a comunidades de todo el mundo. Buscamos promover el crecimiento económico a través de iniciativas que fomenten la igualdad de oportunidades, la diversidad y el desarrollo sostenible.
        </p>
      </section>
      <section>
        <h2>Nuestro equipo</h2>
        <p>
        En ElQueb, somos tres apasionados estudiantes de ingeniería unidos por nuestra pasión por los desafíos. Fusionamos nuestras habilidades y creatividad para enfrentar problemas complejos en la economía local. Nuestra determinación y mentalidad innovadora nos impulsan a buscar soluciones que transformen el futuro de Colombia.
        </p>
      </section>
      
    </div>
      <Divider />

      <Partners />
    </div>
    
  );
}