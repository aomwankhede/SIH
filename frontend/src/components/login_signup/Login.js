import React, { useState ,useEffect } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

function Login(){

    const [user, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // useEffect(()=>{
    //     fetchUsers();
    // },[])

    // const fetchUsers = () =>{
    //     axios
    //     .get('http://localhost:3400/signup')
    //     .then((res)=>{
    //         console.log(res.data.fetch)
    //     })
    // }

    const handleLogin = async (event) =>{
        event.preventDefault()
        try{
            const response = await axios.post('http://localhost:3400/login',{email, password})
            const token = response.data.token
            console.log(token);
            alert('Login successful')
            setEmail('')
            setPassword('')
            // fetchUsers();
            navigate('/')
            window.location.reload()
            localStorage.setItem('token',token)
        }catch(err){
            console.log('Login error')
        }
    }

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br/>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login