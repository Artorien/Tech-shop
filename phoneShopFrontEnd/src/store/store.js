import { configureStore } from "@reduxjs/toolkit";
import {
  modelReducer,
  memoryReducer,
  priceReducer,
  diagonalReducer,
  tokenReducer,
  pageReducer,
  sizeReducer,
} from "./SpecificationSlice";
import { apiCategory } from "./api";

const store = configureStore({
  reducer: {
    model: modelReducer,
    memory: memoryReducer,
    price: priceReducer,
    diagonal: diagonalReducer,
    token: tokenReducer,
    page: pageReducer,
    size: sizeReducer,
    [apiCategory.reducerPath]: apiCategory.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(apiCategory.middleware),
});

export default store;
