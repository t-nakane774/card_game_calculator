import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

interface RangeProps {
  onRangeChange: (range: number[]) => void;
  rangeMax: number;
}

export const RangeSlider: React.FC<RangeProps> = ({ onRangeChange, rangeMax }) => {
  const [range, setRange] = useState([1, rangeMax]);

  const handleChange = (event: Event, newRange: number | number[]) => {
    setRange(newRange as number[]);
    onRangeChange(newRange as number[]);
  };

  return (
    <div>
      <Slider
        value={range}
        onChange={handleChange}
        min={1}
        max={rangeMax}
        valueLabelDisplay="auto"
      />
    </div>
  );
};