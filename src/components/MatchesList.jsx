import React, { useMemo, useState } from 'react';
import { qualifiedCountries } from '../data';
import logo from '../../logo/logo.png';
import './MatchesList.css';

const MatchesList = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    // Memoize the processed matches to avoid re-calculating on every render
    const matchesByDate = useMemo(() => {
        try {
            const allMatches = [];
            const processedSignatures = new Set();
            const countryMap = new Map();
            qualifiedCountries.forEach(c => countryMap.set(c.name, c));

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
                        const team1 = country.name;
                        const team2 = match.opponent;
                        const teams = [team1, team2].sort();
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
                    const isoString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
                    const date = new Date(isoString);
                    return isNaN(date.getTime()) ? 9999999999999 : date.getTime();
                } catch (e) {
                    return 9999999999999;
                }
            };

            allMatches.sort((a, b) => parseDate(a.date, a.time) - parseDate(b.date, b.time));

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

    const activeDates = useMemo(() => {
        return new Set(Object.keys(matchesByDate));
    }, [matchesByDate]);

    // Calendar generation logic
    const renderCalendarMonth = (year, month, monthName) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday

        const days = [];
        // Empty slots for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${day.toString().padStart(2, '0')}/${(month + 1).toString().padStart(2, '0')}/${year}`;
            const isActive = activeDates.has(dateStr);
            const isSelected = selectedDate === dateStr;

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${isActive ? 'active' : ''} ${isSelected ? 'selected' : ''}`}
                    onClick={() => isActive && setSelectedDate(dateStr)}
                    title={isActive ? 'Ver jogos deste dia' : 'Sem jogos'}
                >
                    {day}
                </div>
            );
        }

        return (
            <div className="month-container">
                <div className="month-title">{monthName}</div>
                <div className="calendar-grid">
                    <div className="calendar-day-header">D</div>
                    <div className="calendar-day-header">S</div>
                    <div className="calendar-day-header">T</div>
                    <div className="calendar-day-header">Q</div>
                    <div className="calendar-day-header">Q</div>
                    <div className="calendar-day-header">S</div>
                    <div className="calendar-day-header">S</div>
                    {days}
                </div>
            </div>
        );
    };

    const filteredDates = selectedDate ? [selectedDate] : Object.keys(matchesByDate);

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

            <div className="matches-view-wrapper">
                <aside className="calendar-sidebar">
                    <div className="calendar-header">
                        <h3>Calendário</h3>
                    </div>
                    {selectedDate && (
                        <button className="calendar-reset-btn" onClick={() => setSelectedDate(null)}>
                            Mostrar Todos
                        </button>
                    )}
                    {renderCalendarMonth(2026, 5, 'Junho 2026')}
                </aside>

                <div className="matches-main-content">
                    <div className="matches-container">
                        {filteredDates.map(date => (
                            matchesByDate[date] ? (
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
                            ) : null
                        ))}
                        {filteredDates.length === 0 && (
                            <div style={{ textAlign: 'center', color: '#aaa', marginTop: '20px' }}>
                                Nenhum jogo encontrado para esta data.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchesList;
