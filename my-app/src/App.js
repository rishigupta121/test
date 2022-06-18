
import { useEffect, useState } from "react";
import Movies from "./movies";
import {Container,CardGroup} from 'react-bootstrap';
const App = () => {
  
  useEffect(()=>{
    const getMovies = async() => {
      try {
        const res =  await fetch('http://localhost:4000/movies');
        //setMovies(res);
        console.log('rdfgdgdgdgddddddddddddddddddddd',typeof res);
      } catch (error) {
        console.log(error);
      }
    }
      getMovies();    
  },[]);
  const [movies, setMovies] = useState([]);


  return (
    <Container>
      <CardGroup>
        <Movies props={movies} />
      </CardGroup>
    </Container>
  );
};
export default App;

