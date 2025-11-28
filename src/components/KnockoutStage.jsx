import React from 'react';

const KnockoutStage = () => {
    // Placeholder data for the bracket structure
    const roundOf16 = Array(8).fill({ match: 'Oitavas', team1: 'TBD', team2: 'TBD' });
    const quarterFinals = Array(4).fill({ match: 'Quartas', team1: 'TBD', team2: 'TBD' });
    const semiFinals = Array(2).fill({ match: 'Semi', team1: 'TBD', team2: 'TBD' });
    const final = [{ match: 'Final', team1: 'TBD', team2: 'TBD' }];

    const MatchBox = ({ match }) => (
        <div className="match-box">
            <div className="match-team">
                <span className="flag-placeholder">🏳️</span> {match.team1}
            </div>
            <div className="match-divider">vs</div>
            <div className="match-team">
                <span className="flag-placeholder">🏳️</span> {match.team2}
            </div>
        </div>
    );

    return (
        <div className="knockout-container">
            <h2 className="stage-title">Fase Final</h2>
            <div className="bracket">
                <div className="round round-16">
                    <h3>Oitavas de Final</h3>
                    {roundOf16.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
                <div className="round round-8">
                    <h3>Quartas de Final</h3>
                    {quarterFinals.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
                <div className="round round-4">
                    <h3>Semifinais</h3>
                    {semiFinals.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
                <div className="round round-2">
                    <h3>Final</h3>
                    {final.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
            </div>
        </div>
    );
};

export default KnockoutStage;
