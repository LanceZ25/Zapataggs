import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";
import { combineReducers } from "redux";

const reducer = combineReducers({
  productList: productListReducer,
});

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
