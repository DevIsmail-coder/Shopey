import React, { useReducer } from "react";
import './signup.css'
import { useNavigate } from "react-router";
import axios from "axios";

const url = "https://express-buy.onrender.com/api/v1"

const Signup = () => {
    const navigate = useNavigate()
    const initialstate = {
        userInfor: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        userError: {}
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'USERINFO':
                const { name, value } = action.payload
                return {
                    ...state, userInfor: { ...state.userInfor, [name]: value }
                }
            case 'USERERROR':
                return {
                    ...state, userError: action.payload
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialstate)

    console.log(state.userInfor);

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: "USERINFO",
            payload: { name, value }
        })
        if (state.userError[name]) {
            dispatch({
                type: "USERERROR",
                payload: { ...state.userError, [name]: "" }
            })
        }
    }

    const validation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleError = () => {
        let error = {}
        if (state.userInfor.fullName.trim() === "") {
            error.fullName = "please enter your fullName"
        }
        if (state.userInfor.email.trim() === "" || !validation(state.userInfor.email)) {
            error.email = "please enter a correct email"
        }
        if (state.userInfor.password.trim() === "") {
            error.password = "please enter a correct password"
        }
        if (state.userInfor.confirmPassword.trim() === "" || state.userInfor.confirmPassword !== state.userInfor.password) {
            error.confirmPassword = "please enter a correct confirmPassword"
        }
        if (Object.keys(error).length > 0) {
            dispatch({
                type: "USERERROR",
                payload: error
            })
            return false
        }
        else {
            return true
            console.log("form submitted successfully:", state.userInfor);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!handleError()) return
        try {
            const res = await axios.post(`${url}/register`, state.userInfor)
            console.log(res);

        } catch (err) {
            console.log(err);

        }
    }


    return (
        <div className="signup-container">
            <form className="signup-box" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <p>Create your account to get full access</p>
                <article className="signupwrap">
                    <main className="signupmain" >
                        <label className="signuplabel">Full name</label>
                        <input
                            name="fullName"
                            value={state.userInfor.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter Full name"
                            className="signup-input"
                        />
                        <p>{state.userError.fullName}</p>
                    </main>
                    <main className="signupmain" >
                        <label className="signuplabel">Email Address</label>
                        <input
                            name="email"
                            value={state.userInfor.email}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter email address"
                            className="signup-input"
                        />
                        <p>{state.userError.email}</p>
                        <p></p>
                    </main>
                    <main className="signupmain">
                        <label className="signuplabel">Password</label>
                        <input
                            name="password"
                            value={state.userInfor.password}
                            onChange={handleChange}
                            type="password"
                            placeholder="Enter Password"
                            className="signup-input"
                        />
                        <p>{state.userError.password}</p>
                    </main>
                    <main className="signupmain">
                        <label className="signuplabel">Confirm Password</label>
                        <input
                            name="confirmPassword"
                            value={state.userInfor.confirmPassword}
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm Password"
                            className="signup-input"
                        />
                        <p>{state.userError.confirmPassword}</p>
                    </main>
                </article>
                <div className="signup-btn">
                    <span className="signupbtnspan">
                        Don’t have an account? <p className="signup-link" onClick={() => navigate("/loginpage")}>Login</p> here
                    </span>
                    <button className="signup-button" type="submit">Signup</button>

                </div>

            </form>
        </div>
    );
};

export default Signup;
