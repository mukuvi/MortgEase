import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container>
          <Grid item>
            <SliderSelect /> <TenureSelect />
          </Grid>
          <Grid item>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
