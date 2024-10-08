import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    model: [],
  },
  reducers: {
    setModel(state, action) {
      state.model.push(action.payload);
    },
    removeModel(state, action) {
      state.model = state.model.filter((model) => model != action.payload);
    },
  },
});

const memorySlice = createSlice({
  name: "memory",
  initialState: {
    memory: [],
  },
  reducers: {
    setMemory(state, action) {
      state.memory.push(action.payload);
    },
    removeMemory(state, action) {
      state.memory = state.memory.filter((memory) => memory != action.payload);
    },
  },
});

const priceSlice = createSlice({
  name: "price",
  initialState: {
    price: "",
  },
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
  },
});

const diagonalSlice = createSlice({
  name: "diagonal",
  initialState: {
    diagonal: [],
  },
  reducers: {
    setDiagonal(state, action) {
      state.diagonal.push(action.payload);
    },
    removeDiagonal(state, action) {
      state.diagonal = state.diagonal.filter(
        (diagonal) => diagonal != action.payload
      );
    },
  },
});

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: 0,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

const sizeSlice = createSlice({
  name: "size",
  initialState: {
    size: 9,
  },
  reducers: {
    setSize(state, action) {
      state.size = action.size;
    },
  },
});

export const { setModel, removeModel } = modelSlice.actions;
export const { setMemory, removeMemory } = memorySlice.actions;
export const { setPrice } = priceSlice.actions;
export const { setDiagonal, removeDiagonal } = diagonalSlice.actions;
export const { setToken } = tokenSlice.actions;
export const { setPage } = pageSlice.actions;
export const { setSize } = sizeSlice.actions;

export const modelReducer = modelSlice.reducer;
export const memoryReducer = memorySlice.reducer;
export const priceReducer = priceSlice.reducer;
export const diagonalReducer = diagonalSlice.reducer;
export const tokenReducer = tokenSlice.reducer;
export const pageReducer = pageSlice.reducer;
export const sizeReducer = sizeSlice.reducer;

export const selectPage = (state) => state.page.page;
