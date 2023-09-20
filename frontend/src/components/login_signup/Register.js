import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
// import './App.css'

const Signup = () => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [role, setRole] = useState('')
    const [sid, setSid] = useState('')
    const [profid, setPid] = useState('')
    const [selectedOption, setSelectedOption] = useState('textbox1');


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

    const handleSignup = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3400/signup', { username, email, password, sid, profid })
            .then(() => {
                alert('Registeration Successful')
                setName('')
                setEmail('')
                setPassword('')
                setSid('')
                setPid('')
                // fetchUsers()
                Navigate('/login')
            })
            .catch((err) => {
                console.log("Registeration failed");
            })
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Username"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <p>Select your role: </p>
                <label>
                    <input
                        type="radio"
                        value="textbox1"
                        checked={selectedOption === 'textbox1'}
                        onChange={handleOptionChange}
                    />
                    Student
                </label>
                <label>
                    <input
                        type="radio"
                        value="textbox2"
                        checked={selectedOption === 'textbox2'}
                        onChange={handleOptionChange}
                    />
                    Professor
                </label>
                <br />
                {selectedOption === 'textbox1' && (
                    <input
                        value={sid}
                        onChange={(e) => setSid(e.target.value)}
                        type="text"
                        placeholder="StudentId"
                    />)}
                <br />
                {selectedOption === 'textbox2' && (
                    <input
                        value={profid}
                        onChange={(e) => setPid(e.target.value)}
                        type="text"
                        placeholder="ProfessorId"
                    />)}
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup