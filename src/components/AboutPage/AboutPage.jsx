import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Box,
  Button,
  CardContent,
  CardMedia,
  Stack,
  Grid,
  Typography,
} from "@mui/material";

function AboutPage() {
  const location = useLocation();
  console.log("LOCATION", location.state);
  const Film = location.state;
  const dispatch = useDispatch();

  // const handleDelete = () => {
  //   dispatch({
  //     type: "DELETE_MOVIE",
  //     payload: Film.id,
  //   });
  //   console.log("Fetching", Film.id);
  // };

  return (
    <div className="container">
      {Film ? (
        <div>
          <CardMedia
            component="img"
            sx={{ width: 700, flexDirection: "column", flexWrap: "wrap" }}
            image={"https://image.tmdb.org/t/p/original" + Film?.backdrop_path}
          />

          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography format="YYYY">{Film?.release_date}</Typography>
            <Typography component="div" variant="h5">
              {Film.original_title.substring(0, 40)}
            </Typography>
            <Typography color="text.secondary" component="div"></Typography>
            <Typography component="div" variant="p">
              Description : {Film.overview}
            </Typography>
            {/* <Stack spacing={2} direction="row" sx={{ mt: 6 }}>
              <Button
                variant="contained"
                color="secondary"
                className="btn-block"
                onClick={handleDelete}
              >
                DELETE
              </Button>
            </Stack> */}
          </CardContent>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AboutPage;
