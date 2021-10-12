import Reducer, { initialState } from "./reducers";

export const store = createStore(Reducer, initialState);

import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => createStore(Reducer) as any;

export const wrapper = createWrapper(makeStore);
