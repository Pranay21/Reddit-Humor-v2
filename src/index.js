import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./components/App/App";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import "./index.css";
import "tachyons";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
