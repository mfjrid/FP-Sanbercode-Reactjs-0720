import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (movies === null) {
      axios
        .get(`https://www.backendexample.sanbersy.com/api/movies`)
        .then((res) => {
          setMovies(
            res.data.map((el) => {
              return {
                id: el.id,
                title: el.title,
                description: el.description,
                year: el.year,
                duration: el.duration,
                genre: el.genre,
                rating: el.rating,
                review: el.review,
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
      .get(`https://www.backendexample.sanbersy.com/api/movies`)
      .then((res) => {
        let cariMovie = res.data.filter((movie) =>
          movie.title.toLowerCase().includes(pencarian.toLowerCase())
        );

        setMovies(
          cariMovie.map((el) => {
            return {
              id: el.id,
              title: el.title,
              description: el.description,
              year: el.year,
              duration: el.duration,
              genre: el.genre,
              rating: el.rating,
              review: el.review,
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
      <h1 className="judul-section">Movie List</h1>
      <table className="list-movie">
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Image URL</th>
          </tr>
          <tr>
            <th></th>
            <th>Sort</th>
            <th></th>
            <th>Sort</th>
            <th>Sort</th>
            <th>Sort</th>
            <th>Sort</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies !== null &&
            movies.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.year}</td>
                  <td>{item.duration}</td>
                  <td>{item.genre}</td>
                  <td>{item.rating}</td>
                  <td>{item.review}</td>
                  <td>{item.image_url}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Movies;
