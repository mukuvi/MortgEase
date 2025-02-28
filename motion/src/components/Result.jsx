import React from "react";

const Result = ({ data }) => {
  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonth = loanTerm * 12; //60 months = 5years
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** totalLoanMonth) /
    ((1 + interestPerMonth) ** totalLoanMonth - 1);
  const totalInterestGenerated = monthlyPayment * totalLoanMonth - loanAmount;
  return <div>Result</div>;
};

export default Result;
