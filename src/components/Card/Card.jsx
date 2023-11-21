import { useState } from 'react';
import { Card, Image, Text, Link as NextLink } from '@nextui-org/react';
import './CardComponent.css';

function CardComponent({ image, text, link }) {
  return (
    <NextLink href={link}>
      <Card hoverable className="card">
        <Image src={image} fit="cover" alt={text} />
        <div className="card-content">
          <Text>{text}</Text>
        </div>
      </Card>
    </NextLink>
  );
};

export default CardComponent;