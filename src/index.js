import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
