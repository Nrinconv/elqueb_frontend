import "./Offers.css";

import Filters from "../../components/Offers/Filters";
import Offer from "../../components/Offers/Offer";
import { useParams } from "react-router-dom";
import OfferS from "../../components/Offers/OfferS";
import { useEffect, useState } from "react";
import { busquedaInfo } from "../../services/general";

const optionOne = [
  {
    ofertaid: "13",
    titulo: "Oferta en Servicios de Consultoría Tecnológica",
    descripcion:
      "Optimiza tu negocio con nuestra consultoría tecnológica. Descubre nuevas oportunidades para el crecimiento digital.",
    category: "Tecnologia",
    imagen: 2,
    ofertante: "DigitalConsult",
  },
  {
    ofertaid: "84",
    titulo: "Promoción en Servicios de Marketing Digital",
    descripcion:
      "Haz crecer tu negocio en línea con nuestro servicio de marketing digital. Descuentos exclusivos para emprendedores.",
    category: "Tecnologia",
    imagen: 3,
    ofertante: "DigitalBoosters",
  },
  {
    ofertaid: "29",
    titulo: "Descuento en Servicios de Mudanza",
    descripcion:
      "Facilitamos tu mudanza con descuentos especiales. Contáctanos para un servicio rápido y eficiente.",
    category: "Transporte",
    imagen: 1,
    ofertante: "MoveEase",
  },
  {
    ofertaid: "42",
    titulo: "Curso de Marketing Digital para Emprendedores",
    descripcion:
      "Aprende las mejores estrategias de marketing digital para impulsar tu negocio. Descuentos exclusivos para emprendedores.",
    category: "Otros",
    imagen: 2,
    ofertante: "DigitalMasters",
  },
  {
    ofertaid: "53",
    titulo: "Descuento en Artículos de Limpieza para el Hogar",
    descripcion:
      "Mantén tu hogar impecable con nuestros productos de limpieza. Descuentos especiales para compras en línea.",
    category: "Productos de Limpieza",
    imagen: 3,
    ofertante: "HomeCleanSupplies",
  },
];

const optionTwo = [
  {
    ofertaid: "30",
    titulo: "Oferta en Maquinaria Agrícola",
    descripcion:
      "Aumenta tu productividad agrícola con nuestra maquinaria de última generación. Descuentos especiales para agricultores.",
    category: "Alimentacion",
    imagen: 1,
    ofertante: "AgroTechSolutions",
  },
  {
    ofertaid: "38",
    titulo: "Venta de Tecnología para Agricultores",
    descripcion:
      "Facilita tu trabajo agrícola con nuestra tecnología especializada. Descuentos exclusivos para agricultores.",
    category: "Alimentacion",
    imagen: 3,
    ofertante: "AgroTechInnovate",
  },
  {
    ofertaid: "65",
    titulo: "Venta de Productos Orgánicos",
    descripcion:
      "Adopta un estilo de vida saludable con nuestros productos orgánicos. Descuentos exclusivos para compras en línea.",
    category: "Alimentacion",
    imagen: 2,
    ofertante: "OrganicHarvest",
  },
  {
    ofertaid: "72",
    titulo: "Oferta en Productos de Belleza Veganos",
    descripcion:
      "Cuida tu piel de manera ética con nuestros productos veganos. Descuentos exclusivos en cremas, maquillaje y más.",
    category: "Productos Personales",
    imagen: 2,
    ofertante: "VeganBeautyCo",
  },
  {
    ofertaid: "8",
    titulo: "Productos de Alimentación Orgánicos",
    descripcion:
      "Descubre nuestra selección de productos alimenticios orgánicos. Contribuye a un estilo de vida saludable y sostenible.",
    category: "Alimentacion",
    imagen: 1,
    ofertante: "GreenHarvest",
  },
];

export default function OffersS() {
  let { busqueda } = useParams();
  /*  const [info, setInfo] = useState();

  async function fetchDataAsync(bsq) {
    setInfo(await busquedaInfo(bsq));
  }

  useEffect(() => {
    fetchDataAsync(busqueda);
  }, [busqueda]); */

  return (
    <>
      <h1 id="h1">Ofertas disponibles en este momento </h1>
      <div className="filters-content">
        <Filters />
      </div>
      <h3 id="h3">Resultados para: {busqueda}</h3>
      <div className="offer-content">
        <OfferS dataInfo={busqueda} />
      </div>
      {/* {busqueda ==
      "Necesito ayuda creando una pagina web que utilice las ultimas tecnologias y utilice diseño web moderno para hacer marketing a mi empresa de mudanzas y limpieza" ? (
        <div className="offer-content">
          <OfferS dataInfo={optionOne} />
        </div>
      ) : busqueda ==
        "tienen una oferta especial para productos de alimentacion o agricultura organico y sostenible" ? (
        <div className="offer-content">
          <OfferS dataInfo={optionTwo} />
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
}
