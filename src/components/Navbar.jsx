import React from 'react';

const Navbar = ({ currentView, onViewChange }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button
                    className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                    onClick={() => onViewChange('home')}
                >
                    Início
                </button>
                <button
                    className={`nav-link ${currentView === 'groups' ? 'active' : ''}`}
                    onClick={() => onViewChange('groups')}
                >
                    Tabela de Grupos
                </button>
                <button
                    className={`nav-link ${currentView === 'matches' ? 'active' : ''}`}
                    onClick={() => onViewChange('matches')}
                >
                    Jogos
                </button>
                <button
                    className={`nav-link ${currentView === 'knockout' ? 'active' : ''}`}
                    onClick={() => onViewChange('knockout')}
                >
                    Fase Final
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
