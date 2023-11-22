import { Card, Link as NextLink } from '@nextui-org/react';
import './CardsComponent.css';
import image1 from '../../assets/proyecto.jpg';
import Offer from '../Offers/Offer'
function Cards() {
  
  const cards = [
    {link: '/proyectos', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
  ];

  return (
    <div>
      <h2 className="cards-title">Conozca la oferta de productos y servicios que Findeter tiene para las entidades territoriales y las empresas</h2>
      <div className="cards-container">
        {/* {cards.map((card, index) => (
          <NextLink key={index} href={card.link}>
            <Card hoverable className="card">
            <div style={{backgroundImage: `url(${card.image})`, backgroundSize: 'cover', height: '100%', width: '100%'}} />
            </Card>
          </NextLink>
        ))} */}
        <Offer/>
      </div>
    </div>
  );
}

export default Cards;