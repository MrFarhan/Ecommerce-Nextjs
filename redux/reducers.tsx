import { COUNTER } from "./actionTypes";

export interface initialStateType {
  counter:number
}

export const initialState:initialStateType = {
  counter: 0,
};

export default function Reducer(state:initialStateType = initialState, { type, payload }) {
  switch (type) {
    case COUNTER:
      console.log("paylaoad is ", payload);
      return {
        ...state,
        counter: payload,
      };
    default:
      return state;
  }
}
