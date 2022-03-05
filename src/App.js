import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
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
  const [movies, setMovies] = useState([]);
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("SpiderMan");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(movies);
  };

  useEffect(() => {
    if (check) searchMovies(search);
    setCheck(false);
  }, [check]);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            setCheck(true);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
