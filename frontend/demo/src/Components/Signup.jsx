import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("https://c4todobackend.herokuapp.com/auth/signup", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: payload
        })
            .then((res) => res.json())
            .then((res) => navigate("/login"))
            .catch((err) => console.log(err))
    }
    return <div>
        <h1>Signuppage</h1>
        <div>
            <span>Name: </span><input type="text" name="name" onChange={handleChange} />
            <br />
            <span>Username: </span> <input type="text" name="username" onChange={handleChange} />
            <br />
            <span>E-mail: </span> <input type="text" name="email" onChange={handleChange} />
            <br />
            <span>Password: </span><input type="text" name="password" onChange={handleChange} />
            <br />
            <button type="submit" onClick={handleSubmit}>Sign up</button>
        </div>
    </div>
}

export { Signup }