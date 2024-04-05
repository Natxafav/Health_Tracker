import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <Link to="Login">
                    <li ><Button>Login</Button></li>
                </Link>
                <Link to='About'>
                    <li ><Button>About</Button></li>
                </Link>
                <Link to='Contact'>
                    <li ><Button>Contact</Button></li>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar
