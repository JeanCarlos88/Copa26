import logo from '../../logo/logo.png';

const KnockoutStage = () => {
    // Placeholder data for the bracket structure with date, time, and venue
    const roundOf16 = [
        { match: 'Oitavas 1', team1: '1A', team2: '2B', date: '28/06/2026', time: '13:00', venue: 'SoFi Stadium' },
        { match: 'Oitavas 2', team1: '1C', team2: '2D', date: '28/06/2026', time: '16:00', venue: 'MetLife Stadium' },
        { match: 'Oitavas 3', team1: '1E', team2: '2F', date: '29/06/2026', time: '13:00', venue: 'AT&T Stadium' },
        { match: 'Oitavas 4', team1: '1G', team2: '2H', date: '29/06/2026', time: '16:00', venue: 'Arrowhead Stadium' },
        { match: 'Oitavas 5', team1: '1B', team2: '2A', date: '30/06/2026', time: '13:00', venue: 'NRG Stadium' },
        { match: 'Oitavas 6', team1: '1D', team2: '2C', date: '30/06/2026', time: '16:00', venue: 'Mercedes-Benz Stadium' },
        { match: 'Oitavas 7', team1: '1F', team2: '2E', date: '01/07/2026', time: '13:00', venue: 'Gillette Stadium' },
        { match: 'Oitavas 8', team1: '1H', team2: '2G', date: '01/07/2026', time: '16:00', venue: 'Hard Rock Stadium' },
    ];

    const quarterFinals = [
        { match: 'Quartas 1', team1: 'Venc. O1', team2: 'Venc. O2', date: '04/07/2026', time: '14:00', venue: 'SoFi Stadium' },
        { match: 'Quartas 2', team1: 'Venc. O3', team2: 'Venc. O4', date: '04/07/2026', time: '18:00', venue: 'MetLife Stadium' },
        { match: 'Quartas 3', team1: 'Venc. O5', team2: 'Venc. O6', date: '05/07/2026', time: '14:00', venue: 'AT&T Stadium' },
        { match: 'Quartas 4', team1: 'Venc. O7', team2: 'Venc. O8', date: '05/07/2026', time: '18:00', venue: 'Arrowhead Stadium' },
    ];

    const semiFinals = [
        { match: 'Semi 1', team1: 'Venc. Q1', team2: 'Venc. Q2', date: '08/07/2026', time: '15:00', venue: 'Mercedes-Benz Stadium' },
        { match: 'Semi 2', team1: 'Venc. Q3', team2: 'Venc. Q4', date: '09/07/2026', time: '15:00', venue: 'AT&T Stadium' },
    ];

    const final = [
        { match: 'Final', team1: 'Venc. S1', team2: 'Venc. S2', date: '13/07/2026', time: '16:00', venue: 'MetLife Stadium' }
    ];

    const MatchBox = ({ match }) => (
        <div className="match-box">
            <div className="match-header">
                <span className="match-date">{match.date} • {match.time}</span>
                <span className="match-venue">{match.venue}</span>
            </div>
            <div className="match-content">
                <div className="match-team">
                    <span className="flag-placeholder">🏳️</span> {match.team1}
                </div>
                <div className="match-vs">vs</div>
                <div className="match-team">
                    <span className="flag-placeholder">🏳️</span> {match.team2}
                </div>
            </div>
        </div>
    );

    return (
        <div className="knockout-container">
            <header className="header">
                <img src={logo} alt="Logo Copa 2026" className="header-logo-small" />
                <h2 className="stage-title">Fase Final</h2>
            </header>
            <div className="bracket">
                <div className="round round-16">
                    <h3>Oitavas</h3>
                    {roundOf16.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
                <div className="round round-8">
                    <h3>Quartas</h3>
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
