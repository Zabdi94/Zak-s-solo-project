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

  // const numbers = useSelector((store) => store.watchedReducer);

  // useEffect(() => {
  //   movieNumber();
  // }, []);

  // const movieNumber = () => {
  //   dispatch({
  //     type: "SET_WATCHED",
  //     payload: numbers,
  //   });
  //   console.log("NUMBERS", numbers);
  // };

  return (
    <div className="container">
      {Film ? (
        <div>
          <CardMedia
            component="img"
            sx={{ width: 250, flexDirection: "column", flexWrap: "wrap" }}
            image={"https://image.tmdb.org/t/p/original" + Film?.poster_path}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {Film.original_title.substring(0, 40)}
              {Film.overview}
            </Typography>
            <Typography color="text.secondary" component="div">
              <Typography format="YYYY">{Film?.release_date}</Typography>
            </Typography>
          </CardContent>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AboutPage;
