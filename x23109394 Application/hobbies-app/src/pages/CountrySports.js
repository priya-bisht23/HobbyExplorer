// CountrySports.js
import React, { useState } from 'react';
import { Button, Form, FormControl, Card, ListGroup, Row, Col, Container, Breadcrumb } from 'react-bootstrap';

function CountrySports() {
    const [country, setCountry] = useState('');
    const [sportsInfo, setSportsInfo] = useState(null);

    const fetchSportsInfo = async () => {
        try {
            const response = await fetch(`https://lkh3qndazu4z2zunn4hmcwqvlm0fluur.lambda-url.eu-west-1.on.aws/api/country/${country}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setSportsInfo(data.sports);
        } catch (error) {
            console.error(error);
            setSportsInfo(null); // Reset the sports info in case of an error
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchSportsInfo();
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-md-center mb-4">
                <Col md={6}>
                    <Form inline onSubmit={handleSubmit} className="mb-4 justify-content-center">
                        <FormControl
                            type="text"
                            placeholder="Country Name"
                            className="mr-sm-2 mb-2"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                        <Button variant="outline-primary" type="submit" className="mb-2">Get Sports</Button>
                    </Form>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3}>
                {sportsInfo && sportsInfo.map((sport, index) => (
                    <Col key={index} className="mb-4">
                        <Card>
                            <Card.Header as="h5">{sport.name}</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Popularity Level: {sport.popularityLevel}
                                </Card.Subtitle>
                                {sport.top5Players && (
                                    <>
                                        <Card.Text>Top 5 Players:</Card.Text>
                                        <ListGroup variant="flush">
                                            {sport.top5Players.map((player, playerIndex) => (
                                                <ListGroup.Item key={playerIndex}>
                                                    {player.name} - {player.position}, {player.team}
                                                </ListGroup.Item>
                                            ))}
                                        </ListGroup>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CountrySports;
