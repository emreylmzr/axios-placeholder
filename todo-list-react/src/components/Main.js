import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleComplete } from '../stores/todoList';


function Main() {

    const todos = useSelector((state) => state.todoList);



    const dispatch = useDispatch();

    const handleCompleteClick = (id) => {

        console.log("handleCompleteClick")

        dispatch(

            toggleComplete({ id: id })

        )

    }

    const handleDeleteTodo = (id) => {


        dispatch(

            deleteTodo({ id: id })
        )
    }

    return (
        <div>


            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">

                {

                    todos.map((todo, index) => (


                        <li key={index} className={todo.completed ? "completed" : null}>
                            <div >
                                <input className="toggle" type="checkbox" onChange={() => handleCompleteClick(todo.id)} checked={todo.completed} />
                                <label>{todo.title}</label>
                                <button className="destroy" onClick={() => handleDeleteTodo(todo.id)}></button>
                            </div>
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