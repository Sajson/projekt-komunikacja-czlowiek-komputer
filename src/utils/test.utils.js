// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../store/appSlice";
import { BrowserRouter as Router } from "react-router-dom";

const renderWithProvider = (
  ui,
  {
    initialState,
    store = configureStore({
      reducer: appSlice.reducer,
      preloadedState: initialState,
    }),
  } = {},
) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(<Router>{ui}</Router>);
};

export { renderWithProvider, renderWithRouter };
