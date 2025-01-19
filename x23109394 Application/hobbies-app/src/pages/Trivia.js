import React, { useState, useEffect } from 'react';
import { Container, Card, Dropdown, DropdownButton, Alert, Spinner } from 'react-bootstrap';
import '../../src/App.css'
function SportsTournaments() {
  const [selectedSport, setSelectedSport] = useState('');
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tournamentsCache, setTournamentsCache] = useState({});
  // Simulated sports list for dropdown
  const sports = ['Table-Tennis', 'Badminton', 'Tennis', 'Football', 'Cricket', 'Basketball', 'Baseball'];

  useEffect(() => {
    if (selectedSport && !tournamentsCache[selectedSport]) {
      fetchTournaments(selectedSport);
    }
  }, [selectedSport, tournamentsCache]);

  const fetchTournaments = async (sport) => {
    setLoading(true);
    setError('');
    try {
      // Adjust the URL or headers according to your API's requirements for fetching tournaments based on selected sport
      const response = await fetch(`https://${selectedSport}.sportdevs.com/tournaments`, {
        headers: {
          'Authorization': 'Bearer ZR1CjSGBe0qMlP8S6LoZUw'
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setTournamentsCache(prevCache => ({
        ...prevCache,
        [sport]: data
      }));
      setTournaments(data);
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSport = (sport) => {
    setSelectedSport(sport);
    if (tournamentsCache[sport]) {
      setTournaments(tournamentsCache[sport]);
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return <Alert variant="danger">Error fetching tournaments: {error}</Alert>;
  }

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">Championing Your Hobby: A Guide to Sports Tournaments</h2>
      <DropdownButton id="dropdown-basic-button" title={selectedSport || "Select Sport"} variant="secondary">
        {sports.map((sport, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelectSport(sport)}>
            {sport}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div className="cards-container">
        {tournaments.length > 0 && selectedSport ? (
          tournaments.map((tournament, index) => (
            <Card className="tournament-card" key={index}>
              <Card.Body>
                <Card.Title>{tournament.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{tournament.class_name}</Card.Subtitle>
                <Card.Text>
                  League: {tournament.league_name}
                </Card.Text>
                <Card.Text>
                  ID: {tournament.id}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Alert variant="info">Select a sport to view tournaments.</Alert>
        )}
      </div>
    </Container>
  );
}

export default SportsTournaments;
