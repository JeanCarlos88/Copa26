import React from 'react';

const GroupDetailsModal = ({ group, onClose }) => {
    if (!group) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{group.name} - Detalhes</h2>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    <table className="group-details-table">
                        <thead>
                            <tr>
                                <th>País</th>
                                <th title="Pontos">Pts</th>
                                <th title="Jogos">J</th>
                                <th title="Vitórias">V</th>
                                <th title="Empates">E</th>
                                <th title="Derrotas">D</th>
                                <th title="Gols Pró">GP</th>
                                <th title="Gols Contra">GC</th>
                                <th title="Saldo de Gols">SG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {group.teams.map((team) => (
                                <tr key={team.id}>
                                    <td className="team-name">
                                        <img src={team.flag} alt={team.name} className="flag" /> {team.name}
                                    </td>
                                    <td>{team.points}</td>
                                    <td>{team.played}</td>
                                    <td>{team.won}</td>
                                    <td>{team.drawn}</td>
                                    <td>{team.lost}</td>
                                    <td>{team.gf}</td>
                                    <td>{team.ga}</td>
                                    <td>{team.gd}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default GroupDetailsModal;
