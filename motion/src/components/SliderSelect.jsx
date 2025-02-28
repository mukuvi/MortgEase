import React from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = () => {
  return (
    <>
      <SliderComponent defaultValue={80} min={50} max={100} />
      <SliderComponent defaultValue={130} min={100} max={200} />
      <SliderComponent defaultValue={10} min={5} max={30} />
    </>
  );
};

export default SliderSelect;
