import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=?';

    fetch(url)
    .then((result)=> result.json())
    .then((json) => {
      console.log(json);
      setBooks(json);
    })
  },[])

  return (
    <div className="App">
      <h1>News Time App</h1>
    </div>
  );
}

export default App;
