import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // Inserts new entry at the top of the array
  }

  return state;
}
