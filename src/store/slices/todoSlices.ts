import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../components/models/todo";

const initialState: Todo[] = []


const todoSlices = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter((todo: Todo) => todo.id !== action.payload)
        },
        editTodo: (state, action: PayloadAction<{ id: number, value: string }>) => {
            const { id, value } = action.payload;

            return state.map((todo: Todo) => {
                return todo.id === id
                    ? {
                        ...todo,
                        title: value
                    }
                    : todo;
            })
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            return state.map((todo: Todo) => {
                return todo.id === action.payload
                    ? {
                        ...todo,
                        done: !todo.done
                    }
                    : todo
            })
        }
    }
})

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todoSlices.actions;
export default todoSlices.reducer;