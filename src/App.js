import "./App.css";
import { Container } from "react-bootstrap";

import { Title } from "./component/title/Title.component";
import { MovieList } from "./component/movie-list/MovieList.component";
import { SearchForm } from "./component/search-form/SearchForm.component";
import { useState } from "react";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  const addMovie = (movie) => {
    const filteredMovies = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    console.log(filteredMovies);
    setMovieList([...filteredMovies, movie]);
  };
  const deleteMovie = (id) => {
    if (!window.confirm("Are your sure?")) {
      return;
    }
    setMovieList(movieList.filter((item) => item.imdbID !== id));
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addMovie={addMovie} />
        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
};

export default App;
