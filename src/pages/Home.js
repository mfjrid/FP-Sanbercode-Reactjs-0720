import React, { Component } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://www.backendexample.sanbersy.com/api/movies`)
      .then((res) => {
        let movies = res.data.map((el) => {
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
        });
        this.setState({ movies });
      });
  }

  render() {
    return (
      <>
        <h1>Movie List</h1>
        <br />
        <div id="article-list">
          <Grid container fixed>
            {this.state.movies.map((item) => {
              return (
                <Grid items xs={4}>
                  <div className="container-movie">
                    <div className="konten-movie">
                      <h3>{item.title}</h3>
                      <div className="rating">
                        <GradeIcon
                          fontSize="small"
                          color="secondary"
                          style={{ display: "flex" }}
                        />
                        <p>
                          <b>{item.rating}</b> / 10
                        </p>
                      </div>
                    </div>
                    <img src={item.image_url} alt="Tidak ada gambar" />
                    <div className="kotak-movie"></div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </>
    );
  }
}

export default Home;
