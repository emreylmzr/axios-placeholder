import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCompleted, seeActive, seeAll, seeCompleted } from '../stores/todoList';

function Footer() {

    const dispatch = useDispatch();

    const clearCompletedHandler = () => {



        dispatch(clearCompleted())
    }

    const seeActiveHandler = () => {


        dispatch(seeActive())
    }

    const seeCompletedHandler = () => {


        dispatch(seeCompleted())
    }

    const seeAllHandler = () => {


        dispatch(seeAll())
    }

    return (
        <div>

            <span className="todo-count">
                <strong>2</strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" onClick={seeAllHandler} className="selected">All</a>
                </li>
                <li>
                    <a onClick={seeActiveHandler} href="#/">Active</a>
                </li>
                <li>
                    <a onClick={seeCompletedHandler} href="#/">Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={clearCompletedHandler()}>
                Clear completed
            </button>
        </div>
    )
}

export default Footer