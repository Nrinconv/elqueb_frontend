import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStarHalfAlt, faHeartbeat,faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './StatisticsComponent.css';
import { Divider } from "@nextui-org/react";

function Statistics() {
    const stats = [
      { icon: faUsers, title: 'Emprededores', description: 'Hemos apoyado alrededor 10M' },
      { icon: faStarHalfAlt, title: 'Reviews', description: '4.5 average rating' },
      { icon: faHeartbeat, title: 'Favorites', description: 'Over 1,000 favorites' },
      { icon: faGlobeAmericas, title: 'Global Reach', description: 'Users from over 100 countries' },
    ];
  
    return (
        <div>
          <Divider/>
          <h2 className="statistics-title">Nuestras Cifras</h2>
          <div className="statistics-container">
            {stats.map((stat, index) => (
              <div key={index} className="statistic">
                <FontAwesomeIcon icon={stat.icon} size="2x" />
                <h3>{stat.title}</h3>
                <p>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
  }

export default Statistics;