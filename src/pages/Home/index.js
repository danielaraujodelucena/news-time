import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { LinkDetalhes, Section, Span } from '../../styles';

function Home() {

  const [book, setBook] = useState([]);

  useEffect(() => {
  
    function loadApi(){
      const url = ' ';
  
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
      <Section>
        {
          book.map((item) => {
            return(
              <Span key={item.rank}>
                  <img src={item.book_image} />
                  <strong>{item.author}</strong>
                  <Link style={{textDecoration: 'none'}} to={`/detalhes/${item.title}`}>
                    <LinkDetalhes>Detalhes</LinkDetalhes>
                  </Link>
              </Span>
            )
          })
        }
      </Section>

    </div>
  );
}

export default Home;
