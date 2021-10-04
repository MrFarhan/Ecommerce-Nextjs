import { COUNTER } from "./actionTypes";
export const counterAction = (payload) => {
  console.log("pay", payload);
  return { type: COUNTER, payload };
};
