import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import settingsReducer from "../../reducers/settings";
import statisticsReducer from "../../reducers/statistics";

const store = createStore(
  combineReducers({
    settings: settingsReducer,
    statistics: statisticsReducer
  })
);

export const CustomProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
