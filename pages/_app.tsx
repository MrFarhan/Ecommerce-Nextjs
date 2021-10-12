import React from "react";
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
