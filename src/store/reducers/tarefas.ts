import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from "../../utils/enums/Tarefa";

type TarefasState = {
  itens: Tarefa[];
};

const initialState: TarefasState = {
  itens: [
    new Tarefa(1, 'Estudar React', enums.Prioridade.IMPORTANTE, enums.Status.PENDENTE, 'Estudar React para melhorar minhas habilidades'),
    new Tarefa(2, 'Estudar JavaScript', enums.Prioridade.NORMAL, enums.Status.CONCLUIDA, 'Estudar JavaScript para melhorar minhas habilidades'),
    new Tarefa(3, 'Estudar TypeScript', enums.Prioridade.URGENTE, enums.Status.PENDENTE, 'Estudar TypeScript para melhorar minhas habilidades'),
  ],
};

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    removerTarefa: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id == action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
  }, // Add a closing parenthesis here
});

export const { removerTarefa, editar } = tarefasSlice.actions;
export default tarefasSlice.reducer;