import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("https://c4todobackend.herokuapp.com/auth/login", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: payload
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res._id)
                if (res.token) {
                    localStorage.setItem("userid", JSON.stringify(res._id))
                    navigate("/notes");
                }
                else {
                    console.log(res.message)
                }
            })
            .catch((err) => console.log(err))
    }
    return <div>
        <h1>Login page</h1>
        <div>
            <span>Username: </span> <input type="text" name="username" onChange={handleChange} />
            <br />
            <span>Password: </span><input type="text" name="password" onChange={handleChange} />
            <br />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    </div>
}

export { Login };