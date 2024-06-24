import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id != action.payload)
        },
        updateTodo: (state, action) => {
            state.todos.map((item) => {
                if (item["id"] == action.payload.id){
                    item.todo = action.payload.tudoMsg
                }
            });
        },
        ToggleEvent: (state, action) => {
            state.todos.map((item) => {
                if (item.id == action.payload) {
                    item.completed = !item.completed
                }
            })
        }

    }
})

export const {addTodo, removeTodo, ToggleEvent, updateTodo, addPrev} = todoSlice.actions

export default todoSlice.reducer