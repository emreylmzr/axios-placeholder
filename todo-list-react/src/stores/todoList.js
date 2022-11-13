import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({

    name: "todos",

    initialState:
        [

            {
                id: 1,
                title: "todo1",
                completed: false,

            },

            {
                id: 2,
                title: "todo2",
                completed: false,

            },

            {
                id: 3,
                title: "todo3",
                completed: false,

            }



        ]
    ,

    reducers: {
        addTodo: (state, action) => {

            const newTodo = {

                id: Date.now(),
                title: action.payload.title,
                completed: false
            };

            state.push(newTodo)


        },

        toggleComplete: (state, action) => {


            const index = state.findIndex((todo) => todo.id === action.payload.id);


            state[index].completed = !state[index].completed




        },



        deleteTodo: (state, action) => {

            return state.filter((todo) => todo.id !== action.payload.id)
        }
        ,


        clearCompleted: (state) => {

            return state.filter((todo) => todo.completed !== true)
        },

        seeAll: (state) => {

            const allTodos = state.filter((todo) => todo.completed !== true && todo.completed !== false)

            return allTodos;
        },

        seeActive: (state) => {

            const filteredActiveTodos = state.filter((todo) => todo.completed !== true)

            return filteredActiveTodos;
        },

        seeCompleted: (state) => {

            const filteredCompletedTodos = state.filter((todo) => todo.completed !== false)

            return filteredCompletedTodos;
        }




    }


})

export const { addTodo, toggleComplete, deleteTodo, clearCompleted, seeAll, seeActive, seeCompleted } = todoList.actions;

export default todoList.reducer;