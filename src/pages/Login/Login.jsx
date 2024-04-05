import { Button, Card, CardContent, InputAdornment, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import './Login.css'
import { login } from '../../services/auth'
import "@fontsource/poppins"
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const userPost = async () => {
        try {
            const res = await login({ email, password })
            localStorage.setItem('Authorization', res.data.token)
            localStorage.setItem('role', res.data.role)
            localStorage.setItem('email', res.data.email)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
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
            <div className="login">
                <Card className="main" sx={{ borderRadius: '20px' }} >
                    <CardContent className="fields">
                        <TextField sx={{ margin: '10px', fontFamily: 'poppins' }} className="field" placeholder='Email' onChange={(e) => setEmail(e.target.value)} ><Typography sx={{ fontFamily: 'poppins' }}>Email</Typography></TextField>
                        <TextField sx={{ margin: '10px', fontFamily: 'poppins' }} className="field" placeholder='Password' onChange={(e) => setPassword(e.target.value)}><Typography sx={{ fontFamily: 'poppins' }}>Password</Typography></TextField>
                    </CardContent>
                    <div className="btncontainer">
                        <Button className='btn' onClick={() => { userPost() }} sx={{ color: 'white', 'backgroundColor': 'black', fontFamily: 'poppins', ":hover": { backgroundColor: 'Aqua', color: 'black', boxShadow: '15px -5px 10px' } }}>Login</Button>
                        <Button className='btn' onClick={() => { }} sx={{ color: 'white', 'backgroundColor': 'black', fontFamily: 'poppins', ":hover": { backgroundColor: 'Aqua', color: 'black', boxShadow: '15px -5px 10px' } }}>Register</Button>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Login
