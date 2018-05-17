import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "normalize.css";
import "./styles/styles.css";
import App from "./App";
import rootSaga from "./saga/mySaga";
import registerServiceWorker from "./registerServiceWorker";
import settingsReducer from "./reducers/settings";
import statisticsReducer from "./reducers/statistics";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    settings: settingsReducer,
    statistics: statisticsReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
