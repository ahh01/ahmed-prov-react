// 1. En lista med filmer (3p)
// Sidan ska visa en lista med filmer
// Användaren ska kunna lägga till nya filmer i listan genom att skriva in filmens namn
// i ett inputfält och sedan klicka på en "Lägg till"-knapp.
// Varje film i listan ska ha en ta bort knapp som tar bort den filmen ur listan

import { useState } from "react";

let count = 1;

function App() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  function handleInput() {
    const movie = {
      id: count++,
      title: input,
    };

    setMovies([...movies, movie]);
    
console.log(setMovies)
}
  function handleRemove(id) {
    const filteredMovies = movies.filter((movie) => movie.id != id);

    setMovies(filteredMovies);
  } 

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleInput}>Lägg till film</button>

       <h1>Min lista</h1>
        <ul>
          {movies.map((movie) => {
            return (
            <li key={movie.id}>
              {movie.title}{" "}
              <button onClick={() => handleRemove(movie.id)}>Ta bort</button>
            </li>
         ); 
        })}
      </ul> 
    </div>
  );
}

export default App;
