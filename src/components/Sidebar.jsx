import React from 'react';
import { qualifiedCountries } from '../data';

const Sidebar = ({ onSelectCountry }) => {
  return (
    <aside className="sidebar">
      <h2>Países Classificados</h2>
      <ul className="country-list">
        {qualifiedCountries.map((country) => (
          <li key={country.id}>
            <button
              className="country-item-button"
              onClick={() => onSelectCountry(country)}
            >
              <img src={country.flag} alt={country.name} className="flag" />
              <span className="name">{country.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
