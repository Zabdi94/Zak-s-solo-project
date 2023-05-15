import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Stack,
  Grid,
  Typography,
  CardHeader,
} from "@mui/material";

function MovieForm() {
  const location = useLocation();
  const Film = location.state;
  const dispatch = useDispatch();

  return (
    <div className="container">
      {Film ? (
        <div>
          <Card variant="outlined">
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "500px", objectFit: "cover" }}
              image={
                "https://image.tmdb.org/t/p/original" + Film?.backdrop_path
              }
            />
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                m: 1,
                flexWrap: "wrap",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  format="YYYY"
                  sx={{
                    fontWeight: "bold",
                    m: 1,
                    fontSize: "25px",
                    fontFamily: "monospace",
                    color: "#159658",
                  }}
                >
                  Release date: {Film?.release_date}
                </Typography>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{
                    display: "flex",
                    fontsize: "h6.fontsize",
                    fontFamily: "Georgia",
                    m: 1,
                    fontWeight: "Bold",
                    color: "#000000",
                  }}
                >
                  {Film.original_title.substring(0, 40)}
                </Typography>
                <Box>
                  <Typography
                    component="div"
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      fontStyle: "italic",
                      fontFamily: "Arial",
                      m: 1,
                      color: "#000000",
                    }}
                  >
                    {Film.overview}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Card>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MovieForm;
