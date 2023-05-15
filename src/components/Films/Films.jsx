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
  Rating,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Films() {
  const dispatch = useDispatch();
  const history = useHistory();

  const watchList = useSelector((store) => store.watchedReducer);

  const handleDelete = (id) => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: id,
    });
  };

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const Watched = (event) => {
    const original_title = event.target.getAttribute("name");
    const poster_path = event.target.getAttribute("image");
  };

  const handleUpdate = (id, newValue) => {
    dispatch({
      type: "UPDATE_MOVIES",
      payload: {
        id: id,
        rating: newValue,
      },
    });
    console.log("this is the update movie reducer", watchList);
    swal.fire("Rated!", "Thank you for rating this movie.", "success");
  };

  return (
    <div className="films">
      {watchList.map((movie, i) => (
        <div key={i} className="movie">
          <Card
            variant="outlined"
            sx={{ display: "flex", height: 400, m: 1, flexWrap: "wrap" }}
          >
            <CardMedia
              component="img"
              sx={{ width: 250, flexDirection: "column", flexWrap: "wrap" }}
              image={"https://image.tmdb.org/t/p/original" + movie?.poster_path}
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
                <Rating
                  name="popularity"
                  value={movie.popularity}
                  onChange={(event, newValue) => {
                    handleUpdate(movie.id, newValue);
                  }}
                />
                <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="btn-block"
                    onClick={() => handleDelete(movie.id)}
                  >
                    DELETE
                  </Button>
                </Stack>
              </CardContent>
            </Box>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Films;
