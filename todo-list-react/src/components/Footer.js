import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, seeActive, seeAll, seeCompleted } from '../stores/todoList';

function Footer() {

    const filterArr = useSelector((state) => state.todoList.filterArr)
    const filterType = useSelector((state) => state.todoList.filterType)
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

    const filters = [
        {
            type: 'all',
            text: 'All',
            func: seeAllHandler
        },
        {
            type: 'active',
            text: 'Active',
            func: seeActiveHandler
        },
        {
            type: 'completed',
            text: 'Completed',
            func: seeCompletedHandler
        }
    ]

    return (
        <div>

            <span className="todo-count">
                <strong>{filterArr.length + ' '}</strong>
                items left
            </span>

            <ul className="filters">
                {
                    filters.map((item,index) => (
                        <li key={index}>
                            <a href="#/" onClick={item.func} className={filterType === item.type && "selected"}>{item.text}</a>
                        </li>        
                    ))
                }
            </ul>
            <button className="clear-completed" onClick={clearCompletedHandler}>
                Clear completed
            </button>
        </div>
    )
}

export default Footer