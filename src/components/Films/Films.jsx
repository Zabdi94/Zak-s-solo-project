import Typography from "@mui/material/styles/createTypography";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert2";
import { Card, Button, CardContent, CardMedia, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Films(playing) {
  const dispatch = useDispatch();
  const history = useHistory();

  const watchList = useSelector((store) => store.watchedReducer);

  console.log("arwg", watchList);
  const handleDelete = () => {
    dispatch({
      type: "DELETE_MOVIE",
      payload: Films,
    });
    console.log("Fetching", Films.id);
  };

  const Watched = (event) => {
    const original_title = event.target.getAttribute("name");
    const poster_path = event.target.getAttribute("image");

    dispatch({
      type: "UPDATE_MOVIES",
      payload: Films.id,
    });
    console.log("this is the update shows reducer", Films);
  };
  return watchList.map((movie, i) => {
    console.log("MOVIE", movie);

    return <h2 key={i}>{movie.title}</h2>;
  });

  // <Card
  //   variant="outlined"
  //   sx={{ display: "flex", height: 400, m: 1, flexWrap: "wrap" }}
  // >
  //   {Film && Film.poster_path && Film.title && (
  //     <CardMedia
  //       component="img"
  //       alt={Film.title}
  //       height="250"
  //       image={Film.poster_path}
  //     />
  //   )}
  //   <CardContent>
  //     {Film && Film.title && (
  //       <Typography gutterBottom variant="h7">
  //         Title: {Film.title}
  //       </Typography>
  //     )}
  //     <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
  //       <Button
  //         variant="contained"
  //         color="secondary"
  //         className="btn-block"
  //         onClick={handleDelete}
  //       >
  //         DELETE
  //       </Button>
  //     </Stack>
  //   </CardContent>
  // </Card>
}

export default Films;
