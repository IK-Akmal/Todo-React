import { useContext } from 'react'
import { TodoContext } from '../../context/todo-context'
import { UserContext } from '../../context/user-context'
import './user-card.css'

function UserCard() {
    const [name, actions] = useContext(UserContext)
    const todoActions = useContext(TodoContext)[1]

    const logoutHandler = () => {
        actions.logout()
        todoActions.clearTodos()
    }

    return (
        <div className="user-card">
            <h2 className="user-card__title">
                Добро пожаловать на сайт, {name}
            </h2>
            <button className="btn btn-danger" onClick={logoutHandler}>Выйти</button>
        </div>
    )
}


export default UserCard