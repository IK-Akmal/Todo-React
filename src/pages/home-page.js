import { useContext, useState } from 'react'
import { UserContext } from '../context/user-context'
import { TodoContext } from '../context/todo-context'

import Header from '../components/header/header'
import UserCard from '../components/user-card/user-card'
import UserForm from '../components/user-form/user-form'
import TodoForm from '../components/todo-form/todo-form'
import Column from '../components/column/column'

function HomePage() {
    const name = useContext(UserContext)[0]
    const [todos, actions] = useContext(TodoContext)


    const activeTodos = todos.filter(function (todo) {
        if (todo.completed === false) {
            return todo
        }
        return false
    })

    const doneTodos = todos.filter(function (todo) {
        if (todo.completed === true) {
            return todo
        }
        return false
    })

    return (
        <div className="container">

            {name.length > 0 ? <main>
                <UserCard />

                <div className="columns-wrapper">
                    <Column
                        title={'Все дела'}
                        todos={todos}
                    />
                    <Column
                        title={'Активные дела'}
                        todos={activeTodos}
                    />
                    <Column
                        title={'Выполненные дела'}
                        todos={doneTodos}

                    />
                </div>

                <TodoForm />
            </main> : <UserForm />}

        </div>

    )
}


export default HomePage