import React, { useState } from "react";
import { Wrap } from "./addCity.style";

const AddCity = (props) => {
  const [value, setValue] = useState("");

  const addCity = (event) => {
    event.preventDefault();
    
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
      <button onClick={addCity}>Добавить</button>
    </Wrap>
  );
};

export default AddCity;
