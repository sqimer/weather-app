import React from "react";
import { Wrap } from "./weather.style";

import Navbar from "../Navbar/Navbar";
import AddCity from "../../components/AddCity/AddCity";

const Weather = () => {
  return (
    <Wrap>
      <Navbar />
      <AddCity />
      
    </Wrap>
  );
};

export default Weather;
