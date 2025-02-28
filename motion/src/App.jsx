import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";

function App() {
  const [data, setData] = useState({
    homeValue: 300,
    downPayment: 3000,
    loanAmount: 3000,
    loanAmount: 100,
  });
  return (
    <div className="App">
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect /> <TenureSelect />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
