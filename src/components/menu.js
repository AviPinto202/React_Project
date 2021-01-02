import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/"><span>Register</span></Link>
            </li>
            <li>
                <Link to="/Admin"><span>Admin</span></Link>
            </li>
        </ul>
    )
}

export default Menu;