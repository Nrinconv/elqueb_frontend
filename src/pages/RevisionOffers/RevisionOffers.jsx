import PendingOffers from "../../components/PendingOffers/PendingOffers";

export default function RevisionOffers() {
  return (
    <div>
      <>
        <h1 id="h1">Ofertas perdientes de revisión</h1>
        <div className="offer-content">
          <PendingOffers />
        </div>
      </>
    </div>
  );
}
