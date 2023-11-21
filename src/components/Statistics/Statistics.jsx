import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import './StatisticsComponent.css';

function Statistics() {
    const stats = [
      { icon: faUser, title: 'Users', description: 'Over 10,000 users' },
      { icon: faStar, title: 'Reviews', description: '4.5 average rating' },
      { icon: faHeart, title: 'Favorites', description: 'Over 1,000 favorites' },
      // add more stats...
    ];
  
    return (
        <div>
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