import TodoItem from '../todo-item/todo-item'
import './todo-list.css'

function TodoList(props) {

    return (
        <ul className="todo-list">
            {props.todoList.map(function (todo, index) {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList