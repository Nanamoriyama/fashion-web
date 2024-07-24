import React from "react";
import Slider from "react-slick";

interface CustomSliderProps {
  settings: any;
  children: React.ReactNode;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
