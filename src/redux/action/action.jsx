import axios from "axios";

import { API_URL } from "../../config";

export const ADD_CITY = "ADD_CITY";

export function addCity(city) {
  const url = `${API_URL}&q=${city.city}`;
  async function getData() {
    const request = await axios.get(url);
    return await request.data;
  }
  // const request = axios.get(url).then(res => res.data).then(data => console.log(data));

  return {
    type: "ADD_CITY",
    payload: getData(),
  };
}

export const deleteCity = (cityId) => ({
  type: "DELETE_CITY",
  payload: cityId,
});
