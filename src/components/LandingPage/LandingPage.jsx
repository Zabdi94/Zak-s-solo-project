import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@mui/material";
import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  const containerStyle = {
    padding: "16px",
  };

  const headingStyle = {
    marginBottom: "16px",
    fontWeight: "bold",
    color: "#3f51b5",
  };

  const colStyle = {
    maxWidth: "100%",
    "@media (min-width: 960px)": {
      maxWidth: "75%",
    },
  };

  const buttonStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h4" style={headingStyle}>
        {heading}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} style={colStyle}>
          <p></p>

          <p></p>

          <p></p>
        </Grid>
        <Grid item xs={12} md={4}>
          <RegisterForm />

          <div style={{ textAlign: "center" }}>
            <Typography variant="h6">Already a Member?</Typography>
            <Button
              variant="contained"
              size="small"
              style={buttonStyle}
              onClick={onLogin}
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LandingPage;
