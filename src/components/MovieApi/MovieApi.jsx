import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  Card,
  Box,
  Button,
  CardContent,
  CardMedia,
  Stack,
  Grid,
} from "@mui/material";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./MovieApi.css";
import { Rating } from "@mui/material";
import Films from "../Films/Films";
import { useHistory } from "react-router-dom";

function MovieApi() {
  const dispatch = useDispatch();
  const playings = useSelector((store) => store.movieNow);

  const [movies, setMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = () => {
    dispatch({
      type: "GET_API",
      payload: movies,
    });
  };

  const addFilm = (movie) => {
    let id = movie.id;
    dispatch({
      type: "ADD_MOVIE",
      payload: {
        id,
      },
    });

    history.push({
      pathname: "/about",
      state: movie,
    });
  };

  return (
    <Grid container spacing={2} columns={4}>
      {playings.map((playing, i) => (
        <Grid item xs={12} sm={6} md={3} key={playing?.id}>
          <Card
            variant="outlined"
            sx={{ display: "flex", height: 400, m: 1, flexWrap: "wrap" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 250, flexDirection: "column", flexWrap: "wrap" }}
              image={
                "https://image.tmdb.org/t/p/original" + playing?.poster_path
              }
            />
            <Box
              sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {playing.title.substring(0, 40)}
                  {playing.description}
                </Typography>
                <Typography color="text.secondary" component="div">
                  <Typography format="YYYY">{playing?.release_date}</Typography>
                </Typography>

                <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
                  <Button
                    id={i}
                    variant="contained"
                    color="secondary"
                    className="btn-block"
                    onClick={(e) => addFilm(playing)}
                  >
                    Add to Watchlist
                  </Button>
                </Stack>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default MovieApi;
