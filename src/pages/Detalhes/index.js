import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

function Detalhes(){
    const { title } = useParams();

    const [book, setBook] = useState([]);

    const list_books = [];

    useEffect(() => {
  
        function loadApi(){
          //const url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=PZy6zRJQZ4SsU0awzngnwNhfG2rjdFEg`;

          const url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${title}&api-key=PZy6zRJQZ4SsU0awzngnwNhfG2rjdFEg`;

          console.log('url', url);

          fetch(url)
          .then((result)=> result.json())
          .then((json) => {
            console.log('aqui: ', json);
            setBook(json.results);
          })
        }
    
        loadApi();
      },[])

    console.log(list_books);

    return (
        <div>
            <h1> Página de Detalhes do Livro {title} </h1>

            {
              book.map((item) => {
                return(
                  <span key={item.url}>
                    <strong>Descrição: </strong> {item.summary}
                  </span>

                )
              })
            
            }
        </div>
    )
}

export default Detalhes;