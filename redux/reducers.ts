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
      let temp = [];
      const existingState = [...state?.item];
      // existingState?.map((itemm, index) => {
      //   console.log("boll", itemm);
      //   // if (itemm?.keyI !== payload?.keyI) {
      //   //   return temp.push(itemm);
      //   // }
      // });
      return {
        ...state,
        item: payload,
      };
    
    default:
      return state;
  }
}
