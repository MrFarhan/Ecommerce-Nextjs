import { COUNTER } from "./actionTypes";
export const counterAction = (payload) => {
  return { type: COUNTER, payload };
};
