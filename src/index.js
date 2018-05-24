import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import "normalize.css";
import "./styles/styles.css";
import "font-awesome/css/font-awesome.min.css";
import App from "./App";
import rootSaga from "./saga/mySaga";
import registerServiceWorker from "./registerServiceWorker";
import settingsReducer from "./reducers/settings";
import statisticsReducer from "./reducers/statistics";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
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
