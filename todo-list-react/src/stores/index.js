import { configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./todoList"

export default configureStore({

    reducer: {

        todoList: todoListReducer,

    },
})