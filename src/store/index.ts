import { configureStore } from "@reduxjs/toolkit";

import tarefas from "./reducers/tarefas";

const store = configureStore({
  reducer: {
    tarefas: tarefas,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;