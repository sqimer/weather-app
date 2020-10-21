import React from "react";
import { Wrap } from "./weather.style";

import Navbar from "../Navbar/Navbar";
import AddCity from "../../components/AddCity/AddCity";
import WeatherList from '../../components/WeatherList/List';

const Weather = () => {
  return (
    <Wrap>
      <Navbar />
      <AddCity />
      <WeatherList />
    </Wrap>
  );
};

export default Weather;
