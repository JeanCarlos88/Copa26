import React, { useMemo } from 'react';
import { qualifiedCountries } from '../data';
import logo from '../../logo/logo.png';
import './MatchesList.css';

const MatchesList = () => {
    // Memoize the processed matches to avoid re-calculating on every render
    const matchesByDate = useMemo(() => {
        try {
            const allMatches = [];
            const processedSignatures = new Set();

            // Create a map for faster lookup
            const countryMap = new Map();
            qualifiedCountries.forEach(c => countryMap.set(c.name, c));

            // Helper to get flag safely
            const getFlag = (name) => {
                const country = countryMap.get(name);
                return country ? country.flag : 'https://flagcdn.com/w40/un.png';
            };

            const getId = (name) => {
                const country = countryMap.get(name);
                return country ? country.id : 'unknown';
            }

            qualifiedCountries.forEach(country => {
                if (country.matches && Array.isArray(country.matches)) {
                    country.matches.forEach(match => {
                        // Normalize team names for consistent signature
                        const team1 = country.name;
                        const team2 = match.opponent;
                        const teams = [team1, team2].sort();

                        // Signature: Date + Time + Sorted Teams
                        const signature = `${match.date}-${match.time}-${teams.join('-')}`;

                        if (!processedSignatures.has(signature)) {
                            processedSignatures.add(signature);

                            allMatches.push({
                                ...match,
                                team1: { name: team1, flag: getFlag(team1), id: getId(team1) },
                                team2: { name: team2, flag: getFlag(team2), id: getId(team2) },
                                score1: '-',
                                score2: '-'
                            });
                        }
                    });
                }
            });

            // Date parsing helper
            const parseDate = (dateStr, timeStr) => {
                if (!dateStr || dateStr === 'A definir') return 9999999999999;

                try {
                    const parts = dateStr.split('/');
                    if (parts.length !== 3) return 9999999999999;

                    const [day, month, year] = parts;

                    let hours = '00';
                    let minutes = '00';

                    if (timeStr && timeStr !== 'TBD' && timeStr !== '--:--' && timeStr.includes(':')) {
                        [hours, minutes] = timeStr.split(':');
                    }

                    // Format for Date constructor: YYYY-MM-DDTHH:mm:00
                    // Note: Month is 0-indexed in Date object if passed as separate args, 
                    // but ISO string is 1-indexed. new Date("2026-06-12T22:00:00") works well.
                    const isoString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
                    const date = new Date(isoString);
                    return isNaN(date.getTime()) ? 9999999999999 : date.getTime();
                } catch (e) {
                    console.error("Error parsing date", dateStr, timeStr, e);
                    return 9999999999999;
                }
            };

            allMatches.sort((a, b) => parseDate(a.date, a.time) - parseDate(b.date, b.time));

            // Group by Date
            const grouped = {};
            allMatches.forEach(match => {
                const dateKey = match.date || 'A definir';
                if (!grouped[dateKey]) {
                    grouped[dateKey] = [];
                }
                grouped[dateKey].push(match);
            });

            return grouped;
        } catch (error) {
            console.error("Critical error in MatchesList processing:", error);
            return {};
        }
    }, []);

    if (!matchesByDate || Object.keys(matchesByDate).length === 0) {
        return (
            <div className="matches-list-view">
                <header className="header">
                    <img src={logo} alt="Logo Copa 2026" className="header-logo-small" />
                    <h1>Jogos da Copa</h1>
                </header>
                <div style={{ textAlign: 'center', marginTop: '50px' }}>Carregando jogos...</div>
            </div>
        );
    }

    return (
        <div className="matches-list-view">
            <header className="header">
                <img src={logo} alt="Logo Copa 2026" className="header-logo-small" />
                <h1>Jogos da Copa</h1>
            </header>

            <div className="matches-container">
                {Object.keys(matchesByDate).map(date => (
                    <div key={date} className="date-section">
                        <h2 className="date-header">{date}</h2>
                        <div className="matches-grid">
                            {matchesByDate[date].map((match, idx) => (
                                <div key={`${date}-${idx}`} className="match-card">
                                    <div className="match-info">
                                        <span className="match-time">{match.time} <span style={{ fontSize: '0.7em', fontWeight: 'normal' }}>(Brasília)</span></span>
                                        <span className="match-venue">{match.venue}</span>
                                    </div>
                                    <div className="match-teams">
                                        <div className="team">
                                            <img src={match.team1.flag} alt={match.team1.name} className="team-flag" />
                                            <span className="team-name">{match.team1.name}</span>
                                        </div>
                                        <div className="score-board">
                                            <span className="score">{match.score1}</span>
                                            <span className="score-divider">x</span>
                                            <span className="score">{match.score2}</span>
                                        </div>
                                        <div className="team">
                                            <span className="team-name">{match.team2.name}</span>
                                            <img src={match.team2.flag} alt={match.team2.name} className="team-flag" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MatchesList;
