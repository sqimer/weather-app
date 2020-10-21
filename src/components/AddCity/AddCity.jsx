import React, { useState } from "react";
import { Wrap } from "./addCity.style";
import { connect } from "react-redux";
import { addCity } from "../../redux/action/action";

const AddCity = ({ addCity }) => {
  const [value, setValue] = useState("");

  const enterCity = (event) => {
    event.preventDefault();
    addCity({
      city: value,
    });
    setValue("");
  };

  return (
    <Wrap>
      <h2>Добавить город</h2>
      <input
        value={value}
        name="title"
        id="title"
        type="text"
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={enterCity}>Добавить</button>
    </Wrap>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
});

export default connect(mapStateToProps, { addCity })(AddCity);
