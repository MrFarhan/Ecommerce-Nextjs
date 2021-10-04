import { createStore } from "redux";
import Reducer, { initialState } from "./reducers";

export const store = createStore(Reducer, initialState);
