import { useState } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../backdrop/backdrop'
import './navbar.css'

function Navbar() {
    const [visible, setVisible] = useState(false)

    const showNavbar = () => {
        setVisible(true)
    }

    const hideNavbar = () => {
        setVisible(false)
    }

    const links = [
        {
            name: 'Главная',
            url: '/'
        },
        {
            name: 'О нас',
            url: '/about'
        },
        {
            name: 'Контакты',
            url: '/contact-us'
        }
    ]

    return (
        <nav className="navbar">
            <button onClick={showNavbar} className="navbar__toggle">
                <i className="fas fa-bars"></i>
            </button>

            {visible === true ? <Backdrop hide={hideNavbar} /> : null}

            <ul className={`navbar__list ${visible === true ? 'navbar__list--show' : ''}`}>

                {links.map(function (link, index) {
                    return (
                        <li key={index} className="navbar__item" onClick={hideNavbar}>
                            <Link className="navbar__link" to={link.url}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}

            </ul>

        </nav>
    )
}


export default Navbar