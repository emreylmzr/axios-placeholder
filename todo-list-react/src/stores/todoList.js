import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({

    name: "todos",

    initialState: {
        mainArr: [
            {
                id: 1,
                title: "todo1",
                completed: false,
                isChanging: false
            },

            {
                id: 2,
                title: "todo2",
                completed: false,
                isChanging: false
            },

            {
                id: 3,
                title: "todo3",
                completed: false,
                isChanging: false
            }
        ],
        filterArr: [],
        filterType: 'all'
    }
    ,

    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
                isChanging: false
            };

            state.mainArr.push(newTodo)
        },

        toggleComplete: (state, action) => {
            const index = state.mainArr.findIndex((todo) => todo.id === action.payload.id);
            state.mainArr[index].completed = !state.mainArr[index].completed;
        },

        deleteTodo: (state, action) => {
            state.mainArr = state.mainArr.filter((todo) => todo.id !== action.payload.id);
        },

        changeTodoChanging: (state, action) => {
            const index = state.mainArr.findIndex((todo) => todo.id === action.payload.id);
            state.mainArr.forEach(x => x.isChanging = false)
            state.mainArr[index].isChanging = true;
        },

        changeTodoValue: (state, action) => {

            const changedTodo = state.mainArr.filter((todo) => todo.isChanging === true);

            changedTodo.title = action.payload.title



            const index = state.mainArr.findIndex((todo) => todo.isChanging);

            state.mainArr[index].title = action.payload

            console.log(action);

        },

        clearCompleted: (state) => {
            state.mainArr = state.mainArr.filter((todo) => todo.completed !== true)
        },

        seeAll: (state) => {
            state.filterArr = state.mainArr;
            state.filterType = 'all'
        },

        seeActive: (state) => {
            state.filterArr = state.mainArr.filter((todo) => todo.completed !== true)
            state.filterType = 'active'
        },

        seeCompleted: (state) => {
            state.filterArr = state.mainArr.filter((todo) => todo.completed !== false)
            state.filterType = 'completed'
        },


    }
})

export const { addTodo, toggleComplete, deleteTodo, clearCompleted, seeAll, seeActive, seeCompleted, changeTodoChanging, changeTodoValue } = todoList.actions;

export default todoList.reducer;