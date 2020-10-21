import React from "react";
import { Wrap, Weather, City, Delete } from "./list.style";

import { connect } from "react-redux";
import { deleteCity } from "../../redux/action/action";

const WeatherList = ({ cityList, deleteCity }) => {
  const deleteItem = (cityId) => {
    deleteCity(cityId);
  };

  const arr = Promise.all(cityList).then(res => console.log(res));
  

  return (
    <Wrap>
      {cityList.map((item, i) => (
        <Weather key={i}>
          <City>{item.name}</City>
          <Delete onClick={deleteItem.bind(null, item.id)}>X</Delete>
        </Weather>
      ))}
    </Wrap>
  );
};

const mapStateToProps = (state) => {
  return {
    cityList: state.cities,
  };
};

export default connect(mapStateToProps, { deleteCity })(WeatherList);
