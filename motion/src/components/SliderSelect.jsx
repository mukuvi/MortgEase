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
        step={10}
        onChange={(e, value) => setData({ homeValue: value })}
      />
      <SliderComponent
        label="Down Payment"
        unit="$"
        amount={1000}
        defaultValue={80}
        min={5}
        max={100}
        step={10}
        onChange={(e, value) => {}}
      />
      <SliderComponent
        label="Loan Value"
        unit="$"
        amount={2000}
        defaultValue={80}
        min={50}
        max={100}
        step={10}
        onChange={(e, value) => {}}
      />
    </>
  );
};

export default SliderSelect;
