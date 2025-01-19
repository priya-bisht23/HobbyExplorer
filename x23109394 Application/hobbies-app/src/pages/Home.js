import React, { useState } from 'react';
import '../App.css';

function Home() {
    const [hobbyName, setHobbyName] = useState('');
    const [hobbyInfo, setHobbyInfo] = useState(null);

    

    const fetchHobbyInfo = async (hobby) => {
        const response = await fetch(`https://34kremxbzd.execute-api.us-east-1.amazonaws.com/dev/levelcheck?hobby=${hobby}`);
        const data = await response.json();
        setHobbyInfo(data[0]); // Assuming the API always returns an array
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from causing a page reload
        fetchHobbyInfo(hobbyName);
    };
    


    return (
        <div className="home-container">
            <header>
                <div className="banner">
                    <h1>Explore Your Next Hobby</h1>
                    <p>Discover hobbies, their difficulty levels, and health benefits.</p>
                    <form className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter Hobby Name"
                            id="hobbyName"
                            value={hobbyName}
                            onChange={(e) => setHobbyName(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </header>
            {hobbyInfo && (
                <div className="hobby-info">
                    <h2>{hobbyInfo.hobby}</h2>
                    <p>Difficulty Level: {hobbyInfo.difficultyLevel}</p>
                    <p>Description: {hobbyInfo.description}</p>
                    <p>Equipment Needed: {hobbyInfo.equipmentNeeded.join(', ')}</p>
                    <p>Health Benefits: {hobbyInfo.healthBenefits}</p>
                    <p>Time Investment: {hobbyInfo.timeInvestment}</p>
                </div>
            )}
            <footer>
                <p>&copy; 2024 HobbyExplorer. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;
