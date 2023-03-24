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

function AboutPage() {
  const location = useLocation();
  //console.log("LOCATION", location.state);
  const Film = location.state;
  const dispatch = useDispatch();

  return (
    <div className="container">
      {Film ? (
        <div>
          <Card variant="outlined">
            <CardMedia
              component="img"
              sx={{ width: 800, flexDirection: "column", flexWrap: "wrap" }}
              image={
                "https://image.tmdb.org/t/p/original" + Film?.backdrop_path
              }
            />
            <Card
              variant="outlined"
              sx={{
                display: "flex",
                height: 200,
                m: 1,
                flexWrap: "wrap",
                flexDirection: "column",
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
                  }}
                >
                  Title: {Film.original_title.substring(0, 40)}
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
                    }}
                  >
                    Description : {Film.overview}
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

export default AboutPage;
