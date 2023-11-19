import "./Offers.css";

import Filters from "../../components/Offers/Filters";
import Offer from "../../components/Offers/Offer";

export default function Offers() {
  return (
    <>
      <h1 id="h1">Ofertas disponibles en este momento </h1>
      <div className="filters-content">
        <Filters />
      </div>
      <div className="offer-content">
        <Offer />
      </div>
    </>
  );
}
