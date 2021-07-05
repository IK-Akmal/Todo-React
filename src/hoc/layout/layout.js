import Header from '../../components/header/header'
import './layout.css'


function Layout(props) {

    return (
        <div className="layout">
            <Header />
            {props.children}

        </div>
    )
}

export default Layout