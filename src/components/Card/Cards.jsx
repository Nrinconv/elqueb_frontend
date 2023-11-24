import { Card, Link as NextLink } from "@nextui-org/react";
import "./CardsComponent.css";
import image1 from "../../assets/proyecto.jpg";
import Recomendados from "../Offers/recomendados";
function Cards() {
  const cards = [
    { link: "/proyectos", image: image1, text: "Proyectos" },
    { link: "/about", image: image1, text: "Proyectos" },
    { link: "/about", image: image1, text: "Proyectos" },
    { link: "/about", image: image1, text: "Proyectos" },
    { link: "/about", image: image1, text: "Proyectos" },
  ];

  return (
    <div>
      <h2 className="cards-title">Ofertas recomendadas</h2>
      <div className="cards-container">
        {/* {cards.map((card, index) => (
          <NextLink key={index} href={card.link}>
            <Card hoverable className="card">
            <div style={{backgroundImage: `url(${card.image})`, backgroundSize: 'cover', height: '100%', width: '100%'}} />
            </Card>
          </NextLink>
        ))} */}
        <Recomendados />
      </div>
    </div>
  );
}

export default Cards;
