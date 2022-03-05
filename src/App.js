import React, { useEffect } from "react";

//http://www.omdbapi.com/?i=tt3896198&apikey=7ba57fd4

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7ba57fd4";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);
  return <h1>App</h1>;
};

export default App;
