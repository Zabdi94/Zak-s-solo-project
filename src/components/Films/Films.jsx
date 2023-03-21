import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
import {
  Card,
  Button,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Films() {
  const dispatch = useDispatch();
  const history = useHistory();

  const watchList = useSelector((store) => store.watchedReducer);

  //console.log("arwg", watchList);
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const Watched = (event) => {
    const original_title = event.target.getAttribute("name");
    const poster_path = event.target.getAttribute("image");

    dispatch({
      type: "UPDATE_MOVIES",
      payload: Films.id,
    });
    console.log("this is the update shows reducer", Films);
  };
  return (
    <div className="films">
      {watchList.map((movie, i) => {
        console.log("MOVIE", movie);

        return (
          <div key={i} className="show">
            <Card
              variant="outlined"
              sx={{ display: "flex", height: 400, m: 1, flexWrap: "wrap" }}
            >
              <CardMedia
                component="img"
                sx={{ width: 250, flexDirection: "column", flexWrap: "wrap" }}
                image={
                  "https://image.tmdb.org/t/p/original" + movie?.poster_path
                }
              />

              <Box
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
              >
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {movie.title?.substring(0, 40)}
                  </Typography>
                  <Typography format="YYYY">
                    Release date: {movie?.release_date}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default Films;
