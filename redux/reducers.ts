import { ITEM } from "./actionTypes";

export interface initialStateType {
  item: any;
}

export const initialState: initialStateType = {
  item: [],
};

export default function Reducer(
  state: initialStateType = initialState,
  { type, payload }
) {
  switch (type) {
    case ITEM:
      return {
        ...state,
        item: payload,
      };
    
    default:
      return state;
  }
}
