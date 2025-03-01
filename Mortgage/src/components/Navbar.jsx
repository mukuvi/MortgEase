import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h4" component="p">
              Mortgage Calculator
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
