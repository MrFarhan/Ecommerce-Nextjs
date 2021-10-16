import Reducer from "./reducers";

import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Reducer);
export let store = createStore(persistedReducer) as any;
export let persistor = persistStore(store);
