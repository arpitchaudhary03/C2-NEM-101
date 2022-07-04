import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Notes = () => {
    const navigate = useNavigate();
    const userid = JSON.parse(localStorage.getItem("userid"));
    const [data, setData] = useState([]);
    const [task, setTask] = useState({});


    useEffect(() => {
        if (!userid) {
            navigate("/login");
        }
        getNotes();
    }, [userid])

    const getNotes = () => {
        fetch(`https://c4todobackend.herokuapp.com/user/${userid}/notes`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
            .catch((err) => console.log(err));
    }


    const handleChange = (e) => {
        let { name, value } = e.target
        setTask({
            ...task,
            [name]: value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(task)
        fetch(`https://c4todobackend.herokuapp.com/user/${userid}/notes`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: payload
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                getNotes();
            })
            .catch((err) => console.log(err));
    }
    return <div>
        <h1>Notes page</h1>
        <div>
            <input type="text" name="title" placeholder="get milk" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>ADD Note</button>
            <hr />
            <div>
                {
                    data && data.length > 0 && data.map((elem) => {
                        return <p key={elem._id}>{elem.title}</p>
                    })
                }
            </div>
        </div>
    </div>
}

export { Notes };