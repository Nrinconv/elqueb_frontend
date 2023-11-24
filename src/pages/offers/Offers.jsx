import "./Offers.css";

import Filters from "../../components/Offers/Filters";
import Offer from "../../components/Offers/Offer";
import { useParams } from "react-router-dom";

export default function Offers() {
  let { busqueda } = useParams();

  return (
    <>
      <h1 id="h1">Ofertas disponibles en este momento </h1>
      <div className="filters-content">
        <Filters />
      </div>
      {busqueda ? <h3 id="h3">Resultados para: {busqueda}</h3> : <></>}
      <div className="offer-content">
        <Offer />
      </div>
    </>
  );
}
