import { createStore } from "redux";

const initialState = {
  cities: [],
};

export const store = createStore(
  weatherReducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);

function weatherReducer(state, action) {
  switch (action.type) {
    case "ADD_CITY":
      return {
        ...state,
        cities: [...state.cities, action.payload],
      };
    case "DELETE_CITY":
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    default:
      return state;
  }
}

// export default weatherReducer;
