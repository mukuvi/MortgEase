import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        label="Home Value"
        unit="$"
        amount={3000}
        defaultValue={80}
        min={50}
        max={100}
        step={10}
        onChange={(e, value) => {}}
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
