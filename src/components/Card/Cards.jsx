import { useState } from 'react';
import { Card, Image, Link as NextLink } from '@nextui-org/react';
import './CardsComponent.css';
import image1 from '../../assets/proyecto.jpg';

function Cards() {
  const cards = [
    {link: '/proyectos', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
    {link: '/about', image: image1, text: 'Proyectos'},
  ];

  return (
    <div className="cards-container">
      <h2 className="cards-title">Conozca la oferta de productos y servicios que Findeter tiene para las entidades territoriales y las empresas</h2>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <NextLink key={index} href={card.link}>
            <Card hoverable className="card">
      <div 
        style={{ 
          backgroundImage: `url(${card.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      />
    </Card>
          </NextLink>
        ))}
      </div>
    </div>
  );
}

export default Cards;