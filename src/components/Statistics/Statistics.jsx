import './StatisticsComponent.css';
import { Divider } from "@nextui-org/react";
import { GiStrong } from "react-icons/gi";

function Statistics() {
    const stats = [
      { icon: <GiStrong />, title: 'Emprededores', description: 'Hemos apoyado alrededor 10M' },
      { icon: <GiStrong />, title: 'Reviews', description: '4.5 average rating' },
      { icon: <GiStrong />, title: 'Favorites', description: 'Over 1,000 favorites' },
      { icon: <GiStrong />, title: 'Global Reach', description: 'Users from over 100 countries' },
    ];
  
    return (
        <div>
          <Divider/>
          <h2 className="statistics-title">Nuestras Cifras</h2>
          <div className="statistics-container">
            {stats.map((stat, index) => (
              <div key={index} className="statistic">
                <div>{stat.icon}</div>
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
  }

export default Statistics;