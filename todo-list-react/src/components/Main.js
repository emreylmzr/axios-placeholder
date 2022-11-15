/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo, seeAll, toggleComplete, changeTodoChanging, changeTodoValue } from '../stores/todoList';


function Main() {

    const filterArr = useSelector((state) => state.todoList.filterArr);
    const mainArr = useSelector((state) => state.todoList.mainArr);
    const dispatch = useDispatch();
    const [text, setText] = useState('');



    useEffect(() => {
        dispatch(seeAll())
        console.log(filterArr)
    }, [mainArr])

    const handleCompleteClick = (id) => {
        dispatch(
            toggleComplete({ id: id })
        )
    }

    const handleDeleteTodo = (id) => {


        dispatch(

            deleteTodo({ id: id })
        )
    }

    const handleChangeTodo = (id, title) => {


        dispatch(changeTodoChanging({ id }))
        setText(title)


    }

    const handleSubmit = (e) => {

        e.preventDefault();
        dispatch(changeTodoValue(text))
    }



    return (
        <div>


            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {

                    filterArr.map((todo, index) => (
                        <li key={index} className={todo.completed ? "completed" : null}>
                            {!todo.isChanging ?
                                (
                                    <div>
                                        <input className="toggle" type="checkbox" onChange={() => handleCompleteClick(todo.id)} checked={todo.completed} />
                                        <label onClick={() => handleChangeTodo(todo.id, todo.title)}>{todo.title}</label>
                                        <button className="destroy" onClick={() => handleDeleteTodo(todo.id)}></button>
                                    </div>
                                )
                                :
                                (
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <input autoFocus className='new-todo' onChange={(e) => setText(e.target.value)} value={text} />
                                    </form>
                                )

                            }

                        </li>

                    ))
                }


            </ul>




        </div>
    )
}

export default Main



/* <div className="view">
<input className="toggle" type="checkbox" />
<label>Have a life!</label>
<button className="destroy"></button>
</div> */

/* <li className="completed">
                    <div className="view">
                        <input className="toggle" type="checkbox" />
                        <label>Learn JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                </li> */