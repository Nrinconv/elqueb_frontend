import { Card, Divider } from '@nextui-org/react';
import "./NewsComponent.css";
import newsData from '../../mocks/news.json';

import imageOne from "../../assets/personas.avif";
import imageTwo from "../../assets/proyecto.jpg";
import imageThree from "../../assets/campesinos.jpg"

// Import slick carousel styles

const images = [
  imageOne,
  imageTwo,
  imageThree,
  // add more image URLs here
];


function NewsItem({ title, description, image }) {
  return (
    <Card shadow className="news-item">
      <img src={image} alt={"uwu"} className="news-item-img" />
      <div className="news-content">
        <h2 className='news-title-new'>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
}
  
  export default function News() {
    return (
      <div className="news-section">
        <h1 className="news-title">NOVEDADES</h1>
        <div className='divider'>
        <Divider/>
        </div>
        <div className="news-container">
          {newsData.map((item, index) => (
            <div className="news-item" key={index}>
              <NewsItem title={item.title} description={item.description} image={imageThree} />
            </div>
          ))}
        </div>
      </div>
    );
  }