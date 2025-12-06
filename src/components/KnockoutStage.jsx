import logo from '../../logo/logo.png';

const KnockoutStage = () => {
    // Placeholder data for the bracket structure with date, time, and venue
    const roundOf32 = [
        { match: 'R32 1', team1: '2A', team2: '2B', date: '28/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 2', team1: '1E', team2: '3A/B/C/D/F', date: '28/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 3', team1: '1F', team2: '2C', date: '29/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 4', team1: '1C', team2: '2F', date: '29/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 5', team1: '1I', team2: '3C/D/F/G/H', date: '29/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 6', team1: '2E', team2: '2I', date: '30/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 7', team1: '1A', team2: '3C/E/F/H/I', date: '30/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 8', team1: '1L', team2: '3E/H/I/J/K', date: '30/06/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 9', team1: '1D', team2: '3B/E/F/I/J', date: '01/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 10', team1: '1G', team2: '3A/E/H/I/J', date: '01/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 11', team1: '2K', team2: '2L', date: '02/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 12', team1: '1H', team2: '2J', date: '02/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 13', team1: '1B', team2: '3E/F/G/I/J', date: '02/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 14', team1: '1J', team2: '2H', date: '03/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 15', team1: '1K', team2: '3D/E/I/J/L', date: '03/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'R32 16', team1: '2D', team2: '2G', date: '03/07/2026', time: 'TBD', venue: 'TBD' },
    ];

    const roundOf16 = [
        { match: 'Oitavas 1', team1: 'Venc. R32 1', team2: 'Venc. R32 2', date: '04/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 2', team1: 'Venc. R32 3', team2: 'Venc. R32 4', date: '04/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 3', team1: 'Venc. R32 5', team2: 'Venc. R32 6', date: '05/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 4', team1: 'Venc. R32 7', team2: 'Venc. R32 8', date: '05/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 5', team1: 'Venc. R32 9', team2: 'Venc. R32 10', date: '06/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 6', team1: 'Venc. R32 11', team2: 'Venc. R32 12', date: '06/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 7', team1: 'Venc. R32 13', team2: 'Venc. R32 14', date: '07/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Oitavas 8', team1: 'Venc. R32 15', team2: 'Venc. R32 16', date: '07/07/2026', time: 'TBD', venue: 'TBD' },
    ];

    const quarterFinals = [
        { match: 'Quartas 1', team1: 'Venc. O1', team2: 'Venc. O2', date: '10/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Quartas 2', team1: 'Venc. O3', team2: 'Venc. O4', date: '10/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Quartas 3', team1: 'Venc. O5', team2: 'Venc. O6', date: '11/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Quartas 4', team1: 'Venc. O7', team2: 'Venc. O8', date: '11/07/2026', time: 'TBD', venue: 'TBD' },
    ];

    const semiFinals = [
        { match: 'Semi 1', team1: 'Venc. Q1', team2: 'Venc. Q2', date: '14/07/2026', time: 'TBD', venue: 'TBD' },
        { match: 'Semi 2', team1: 'Venc. Q3', team2: 'Venc. Q4', date: '15/07/2026', time: 'TBD', venue: 'TBD' },
    ];

    const final = [
        { match: 'Final', team1: 'Venc. S1', team2: 'Venc. S2', date: '19/07/2026', time: 'TBD', venue: 'MetLife Stadium' }
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
                <div className="round round-32">
                    <h3>16 avos</h3>
                    {roundOf32.map((m, i) => <MatchBox key={i} match={m} />)}
                </div>
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
