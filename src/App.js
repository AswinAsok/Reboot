import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
//http://www.omdbapi.com/?i=tt3896198&apikey=7ba57fd4

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7ba57fd4";

const movie1 = {
  Title: "Avengers: Endgame",
  Year: "2019",
  imdbID: "tt4154796",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="SuperMan"
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
