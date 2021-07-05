import { useContext, useState } from 'react'
import { TodoContext } from '../../context/todo-context'
import './todo-form.css'

function TodoForm(props) {
  const actions = useContext(TodoContext)[1]
  const [visible, setVisible] = useState(false)

  const modalHandler = () => {
    setVisible(!visible)
  }

  const [value, setValue] = useState(props.todo ? props.todo.title : '')
  const [description, setDescription] = useState(props.todo ? props.todo.description : '')

  const submitFunction = (event) => {
    event.preventDefault()

    if (value.trim().length === 0) {
      return
    }

    if (props.todo) {
      actions.changeTodo(props.todo.id, value, description)
    } else {
      actions.addNewTodo(value, description)
      resetForm()
    }

    modalHandler()
  }

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const resetForm = () => {
    // Сбрасываем поля
    setValue('')
    setDescription('')
  }

  return (
    <div>

      {props.todo ?
        <button onClick={modalHandler} className="btn btn-primary todo-form-modal__edit">
          <i className="fas fa-pencil-alt"></i>
        </button> :

        <button onClick={modalHandler} className="btn btn-primary todo-form-modal__button">
          <i className="fas fa-plus-circle"></i>
        </button>
      }

      <div className={`todo-form-modal ${visible === true ? 'todo-form-modal--show' : ''}`}>
        <div className="todo-form-content">
          <i onClick={modalHandler} className="todo-form-modal__close fas fa-times"></i>
          <form className="todo-form" onSubmit={submitFunction}>
            <h3>
              {props.todo ? 'Изменить Todo' : 'Добавить Todo'}
            </h3>

            <label className="todo-form__label" htmlFor="todo-name">
              Введите заголовок
            </label>
            <input className="form-control todo-form__input" value={value} onChange={handleInputChange} id="todo-name" name="name" placeholder="Введите название Todo" type="text" />

            <label className="todo-form__label" htmlFor="todo-description">
              Введите описание
            </label>
            <input className="form-control todo-form__input" value={description} onChange={handleDescriptionChange} id="todo-description" name="description" type="text" placeholder="Введите описание Todo" />

            <button className="btn btn-primary todo-form__submit" type="submit">
              {props.todo ? 'Изменить' : 'Добавить'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default TodoForm