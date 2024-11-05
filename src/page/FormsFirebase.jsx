import React, { useState } from "react";
import "../App.css";
import { useAuth } from "../context/authcontex";
import { auth } from "../firebase/firebase.confing";

function FormsFirebase() {
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const handRegister = (e) => {
        e.preventDefault
        auth.register(emailRegister, passwordRegister)
    }
    return (

        <div className="App">
            <form className="form">
                <h3 className="title">Register</h3>
                <input onChange={(e) => setEmailRegister(e.target.value)}
                    className="input"
                    type="email"
                />
                <input onChange={(e) => setPasswordRegister(e.target.value)}
                    className="input"
                    type="password"
                />
                <button onClick={() => handRegister()} className="button">submit</button>
            </form>

            <form className="form">
                <h3 className="title"> Login</h3>
                <input className="input" type="email" />
                <input className="input" type="password" />
                <button className="button"> submit</button>
                <button className="button"> Google</button>
            </form>
            <button className="button">Logout</button>
        </div>

    )
}
export default FormsFirebase;