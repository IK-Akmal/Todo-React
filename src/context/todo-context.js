import { useState, createContext } from 'react'
import { getTodos, saveTodos, removeTodos } from '../utils/todosLocalstorage'

export const TodoContext = createContext()

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState(getTodos() || [])

    const actions = {
        addNewTodo: (text, description) => {

            const newTodo = {
                id: Math.random(),
                title: text,
                description: description,
                completed: false
            }


            const newTodos = [newTodo, ...todos]

            setTodos(newTodos)
            saveTodos(newTodos)
        },

        changeTodo: (id, newTitle, newDescription) => {
            const newTodos = todos.map(function (todo, index) {
                if (todo.id === id) {
                    return { ...todo, title: newTitle, description: newDescription }
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodos(newTodos)
        },

        changeTodoStatus: (id) => {
            const newTodos = todos.map(function (todo, index) {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodos(newTodos)
        },

        deleteTodo: (id) => {
            const newTodos = todos.filter(function (todo, index) {
                if (todo.id === id) {
                    return false
                } else {
                    return todo
                }
            })

            setTodos(newTodos)
            saveTodos(newTodos)
        },

        clearTodos: () => {
            setTodos([])
            removeTodos()
        }
    }

    return (
        <TodoContext.Provider value={[todos, actions]}>
            {props.children}
        </TodoContext.Provider>
    )
}