import { Stack, Typography } from "@mui/material";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonth = loanTerm * 12; //60 months = 5years
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonth) /
    ((1 + interestPerMonth) ** totalLoanMonth - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonth - loanAmount;
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of principle and interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(105, 6, 219, 0.2)", "rgba(8, 251, 60, 0.2)"],
        borderColor: ["rgb(221, 7, 7)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Payment : $ {monthlyPayment.toFixed(2)}
      </Typography>
      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default Result;
