import React from "react";
import Slider from "@mui/material/Slider";
import { Stack, Typography } from "@mui/material";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  step,
  onChange,
  value,
  label,
  unit,
  amount,
}) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant="subtitle2"> {label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
      </Stack>
      <Slider
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        marks
        onChange={onChange}
        value={value}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography color="text.secondary" variant="caption">
          {unit}
          {min}
        </Typography>
        <Typography color="text.secondary" variant="caption">
          {unit}
          {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
