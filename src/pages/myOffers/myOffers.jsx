import MyOffers from "../../components/MyOffers/MyOffers";

function myOffers() {
  return (
    <div>
      <>
        <h1 id="h1">Mis ofertas</h1>
        <div className="offer-content">
          <MyOffers />
        </div>
      </>
    </div>
  );
}

export default myOffers;
