import React from "react";
import { Wrap, Delete } from "./weatherItem.style";

const WeatherItem = () => {
  const deleteCity = () => {
    console.log("delete");
  };

  return (
    <Wrap>
      <Delete onClick={deleteCity} href="#">
        X
      </Delete>
    </Wrap>
  );
};

export default WeatherItem;
