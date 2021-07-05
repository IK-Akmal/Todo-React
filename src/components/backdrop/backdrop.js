import './backdrop.css'


function Backdrop(props) {

    return (
        <div onClick={props.hide} className="backdrop"></div>
    )
}


export default Backdrop