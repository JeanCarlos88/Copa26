import React from 'react';

const GroupTable = ({ group, onOpenModal }) => {
  return (
    <div className="group-table-container">
      <div className="group-header">
        <h3>{group.name}</h3>
        <button className="details-button" onClick={() => onOpenModal(group)}>+</button>
      </div>
      <table className="group-table">
        <thead>
          <tr>
            <th>País</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {group.teams.map((team) => (
            <tr key={team.id}>
              <td className="team-name">
                <img src={team.flag} alt={team.name} className="flag" /> {team.name}
              </td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;
