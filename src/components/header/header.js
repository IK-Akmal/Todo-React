import Navbar from '../navbar/navbar'
import './header.css'

function Header() {

    return (
        <div className="container">
            <header className="header">
                <h1 className="header__title">Todo App</h1>
                <Navbar />
            </header>
        </div>
    )
}

export default Header