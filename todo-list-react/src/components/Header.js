import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../stores/todoList';
import { useState } from 'react';


function Header() {

    const [value, setValue] = useState();

    const dispatch = useDispatch()

    const onSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(addTodo({

            title: value,
        }))

    }





    return (
        <div>


            <header className="header">
                <h1>todos</h1>
                <form onSubmit={(event) => onSubmitHandler(event)}>
                    <input onChange={(event) => setValue(event.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />

                </form>
            </header>


        </div>
    )
}

export default Header