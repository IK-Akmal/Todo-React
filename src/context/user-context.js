import { useState, createContext } from 'react'
import { getUserFromLocalstorage, removeUserFromLocalstorage, saveUserToLocalstorage } from '../utils/userLocalstorage'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
    const [name, setName] = useState(getUserFromLocalstorage() || '')

    const actions = {
        login: (username) => {
            setName(username)
            saveUserToLocalstorage(username)
        },

        logout: () => {
            setName('')
            removeUserFromLocalstorage()
        }
    }

    return (
        <UserContext.Provider value={[name, actions]}>
            {props.children}
        </UserContext.Provider>
    )
}