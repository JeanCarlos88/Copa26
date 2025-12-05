import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import GroupTable from './components/GroupTable';
import GroupDetailsModal from './components/GroupDetailsModal';
import { groups } from './data';
import './App.css';
import logo from '../logo/logo.png';

import CountryMatchesModal from './components/CountryMatchesModal';

import Navbar from './components/Navbar';
import KnockoutStage from './components/KnockoutStage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleOpenModal = (group) => {
    setSelectedGroup(group);
  };

  const handleCloseModal = () => {
    setSelectedGroup(null);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  const handleCloseCountryModal = () => {
    setSelectedCountry(null);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <div className="home-view">
            <img src={logo} alt="Logo Copa 2026" className="home-logo" />
            <h1>Copa do Mundo 2026</h1>
          </div>
        );
      case 'groups':
        return (
          <div className="groups-view-container">
            <Sidebar onSelectCountry={handleSelectCountry} />
            <main className="main-content">
              <header className="header">
                <img src={logo} alt="Logo Copa 2026" className="header-logo-small" />
                <h1>Tabela de Grupos</h1>
              </header>
              <div className="groups-grid">
                {groups.map((group) => (
                  <GroupTable
                    key={group.name}
                    group={group}
                    onOpenModal={handleOpenModal}
                  />
                ))}
              </div>
            </main>
          </div>
        );
      case 'knockout':
        return <KnockoutStage />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Navbar currentView={currentView} onViewChange={setCurrentView} />

      {renderContent()}

      {selectedGroup && (
        <GroupDetailsModal
          group={selectedGroup}
          onClose={handleCloseModal}
        />
      )}
      {selectedCountry && (
        <CountryMatchesModal
          country={selectedCountry}
          onClose={handleCloseCountryModal}
        />
      )}
    </div>
  );
}

export default App;
