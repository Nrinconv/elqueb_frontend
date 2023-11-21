import React from 'react';
import './Search.css';

const SearchComponent = () => {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Escribe qué oportunidad estás buscando" />
      <button className="search-button">Buscar</button>
    </div>
  );
};

export default SearchComponent;