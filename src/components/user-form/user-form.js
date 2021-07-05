import { useContext, useState } from "react"
import { UserContext } from "../../context/user-context"
import './user-form.css'

function UserForm() {
    const actions = useContext(UserContext)[1]
    const [username, setUsername] = useState('')

    const handleInputChange = (event) => {
        setUsername(event.target.value)
    }

    const submitFunction = (event) => {
        event.preventDefault()

        if (username.trim().length === 0) {
            return
        }

        actions.login(username)
    }

    return (
        <form onSubmit={submitFunction} className="user-form">
            <h4>Пожалуйста, представтесь</h4>
            <label className="form-label user-form__label" htmlFor="username">Введите имя</label>
            <input className="form-control user-form__input" value={username} onChange={handleInputChange} name="username" id="username" type="text" placeholder="Введите ваше имя" />
            <button className="btn btn-primary user-form__button">Войти</button>
        </form>
    )
}

export default UserForm