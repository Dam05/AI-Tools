import React, { useState } from 'react';

function ScriptSuggestion() {
  const [genre, setGenre] = useState('');
  const [tone, setTone] = useState('');
  const [characters, setCharacters] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call your AI model to generate script suggestions based on user input
    const response = await fetch('/api/suggestions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        genre,
        tone,
        characters
      })
    });

    const data = await response.json();
    setSuggestions(data.suggestions);
  };

  return (
    <div className="App">
      <div className="flex-c">
        <div className="left-side">
      <h1>Script Suggestion AI Tool</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Genre:
          <input type="text" value={genre} onChange={(event) => setGenre(event.target.value)} />
        </label>
        <br />
        <label>
          Tone:
          <input type="text" value={tone} onChange={(event) => setTone(event.target.value)} />
        </label>
        <br />
        <label>
          Characters:
          <input type="text" value={characters} onChange={(event) => setCharacters(event.target.value)} />
        </label>
        <br />
        <button type="submit">Get Suggestions</button>
      </form>
      </div>
      <div className="right-side">
      <h3>Suggested Scripts:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
      </div>
      </div>
    </div>
    
  );
}

export default ScriptSuggestion;
