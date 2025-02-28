import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  return (
    <>
      <SliderComponent
        label="Home Value"
        unit="$"
        min={1000}
        max={bank_limit}
        amount={data.homeValue}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={100}
        onChange={(e, value) => setData({ ...data, homeValue: value })}
      />
      <SliderComponent
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        defaultValue={data.downPayment}
        value={data.downPayment}
        min={1000}
        max={10000}
        step={100}
        onChange={(e, value) => setData({ ...data, downPayment: value })}
      />
      <SliderComponent
        label="Loan Value"
        unit="$"
        amount={data.loanAmount}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={1000}
        max={5000}
        step={100}
        onChange={(e, value) => setData({ ...data, loanAmount: value })}
      />
      <SliderComponent
        label="Interest Rate"
        unit="$"
        amount={data.loanTerm}
        defaultValue={data.loanTerm}
        value={data.loanTerm}
        min={1000}
        max={7000}
        step={100}
        onChange={(e, value) => setData({ ...data, loanTerm: value })}
      />
    </>
  );
};

export default SliderSelect;
