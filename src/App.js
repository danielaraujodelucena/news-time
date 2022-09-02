import React, { useState, useEffect } from 'react';
import { A, Header, Section, Span } from './styles';

function App() {

  const [book, setBook] = useState([]);

  useEffect(() => {
  
    function loadApi(){
      const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PZy6zRJQZ4SsU0awzngnwNhfG2rjdFEg';
  
      fetch(url)
      .then((result)=> result.json())
      .then((json) => {
        setBook(json.results.books);
      })
    }

    loadApi();
  },[])

  return (
    <div>
      <Header>News Time App</Header>

      <Section>
        {
          book.map((item) => {
            return(
              <Span key={item.rank}>
                  <img src={item.book_image} />
                  <strong>{item.author}</strong>
                  <A href=''>Detalhes</A>
              </Span>
            )
          })
        }
      </Section>

    </div>
  );
}

export default App;
