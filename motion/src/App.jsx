import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <SliderSelect />
        <Result />
        <TenureSelect />
      </Container>
    </div>
  );
}

export default App;
