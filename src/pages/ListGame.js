import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const ListGame = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (movies === null) {
      axios
        .get(`https://www.backendexample.sanbersy.com/api/games`)
        .then((res) => {
          setMovies(
            res.data.map((el) => {
              return {
                id: el.id,
                name: el.name,
                genre: el.genre,
                singlePlayer: el.singlePlayer,
                multiplayer: el.multiplayer,
                platform: el.platform,
                release: el.release,
                image_url: el.image_url,
              };
            })
          );
        });
    }
  }, [movies]);

  const handleSearch = (event) => {
    let pencarian = event.target.value;
    axios
      .get(`https://www.backendexample.sanbersy.com/api/games`)
      .then((res) => {
        let cariMovie = res.data.filter((movie) =>
          movie.name.toLowerCase().includes(pencarian.toLowerCase())
        );

        setMovies(
          cariMovie.map((el) => {
            return {
              id: el.id,
              name: el.name,
              genre: el.genre,
              singlePlayer: el.singlePlayer,
              multiplayer: el.multiplayer,
              platform: el.platform,
              release: el.release,
              image_url: el.image_url,
            };
          })
        );
      });
  };

  return (
    <>
      <div id="search-box">
        <SearchIcon />
        <InputBase
          className="input-search"
          placeholder="Cari.."
          id="search"
          name="search"
          onChange={handleSearch}
        />
      </div>
      <h1 className="judul-section">Game List</h1>
      <table className="list-movie">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Genre</th>
            <th>Single Player</th>
            <th>Multiplayer</th>
            <th>Platform</th>
            <th>Release</th>
            <th>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {movies !== null &&
            movies.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.genre}</td>
                  <td>{item.singlePlayer}</td>
                  <td>{item.multiplayer}</td>
                  <td>{item.platform}</td>
                  <td>{item.release}</td>
                  <td>{item.image_url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ListGame;
