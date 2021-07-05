import { Link } from 'react-router-dom'
import { useContext } from "react"
import { TodoContext } from "../../context/todo-context"
import './todo-item.css'
import TodoForm from '../todo-form/todo-form'

function TodoItem(props) {
    const actions = useContext(TodoContext)[1]

    return (

        <li className="todo-item">
            <h4 className="todo-item__title">
                <Link className="todo-item__link" to={'/todo/' + props.todo.id}>
                    {props.todo.title}
                </Link>
            </h4>
            <p className="todo-item__description">
                {props.todo.description}
            </p>
            <div className="todo-item__buttons">
                <button
                    onClick={() => actions.changeTodoStatus(props.todo.id)}
                    className={`btn ${props.todo.completed === true ? 'btn-success' : 'btn-warning'} todo-item__status`}
                >
                    {props.todo.completed === true ? 'Выполнено' : 'Выполнить'}
                </button>

                <TodoForm todo={props.todo} />

                <button onClick={() => actions.deleteTodo(props.todo.id)} className="btn btn-danger todo-item__delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>

    )
}


export default TodoItem