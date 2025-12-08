import React from 'react';

const CountryMatchesModal = ({ country, onClose }) => {
    if (!country) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title-with-flag">
                        <img src={country.flag} alt={country.name} className="modal-flag" />
                        <h2>Jogos - {country.name}</h2>
                    </div>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <table className="matches-table">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Hora <span style={{ fontSize: '0.8em', fontWeight: 'normal' }}>(Brasília)</span></th>
                                <th>Local</th>
                                <th>Oponente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {country.matches && country.matches.length > 0 ? (
                                country.matches.map((match, index) => (
                                    <tr key={index}>
                                        <td>{match.date}</td>
                                        <td>{match.time}</td>
                                        <td>{match.venue}</td>
                                        <td>{match.opponent}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="no-matches">Nenhum jogo agendado ainda.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CountryMatchesModal;
