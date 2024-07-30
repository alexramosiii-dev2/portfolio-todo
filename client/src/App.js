import React, { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }, []);

    return (
        <div className="App">
        <h1>Item</h1>
        <ul>
            {notes.map(note => (
            <li key={note._id}>{note.name}: {note.description}</li>
            ))}
        </ul>
        </div>
    );
}

export default App;