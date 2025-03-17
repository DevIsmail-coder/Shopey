import React, { useReducer } from "react";
import './login.css'
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate()

    const initialstate = {
        userInfo: {
            email: "",
            password: ""
        },
        userError: {}
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "USERINFO":
                const { name, value } = action.payload
                return {
                    ...state, userInfo: { ...state.userInfo, [name]: value }
                }
            case "USERERROR":
                return { ...state, userError: action.payload }
            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialstate)

    console.log(state.userInfo);

    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: "USERINFO",
            payload: { name, value }
        })
    }

    const validation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleErr = (e) => {
        e.preventDefault()
        let error = {}

        if (state.userInfo.email.trim() === "" || !validation(state.userInfo.email)) {
            error.email = "please enter a correct email"
        }
        if (state.userInfo.password.trim() === "") {
            error.password = "please enter a correct password"
        }
        if(Object.keys(error) > 0){
            dispatch({
                type: "USERERROR",
                payload: error
            })
        }
    }

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleErr}>
                <h2>Login</h2>
                <p>Enter Login details to get access</p>
                <article className="Loginwrap">
                    <main className="Loginmain" >
                        <label className="loginlabel"> Username Or Email Address</label>
                        <input
                            type="text"
                            placeholder="Username / Email address"
                            className="login-input"
                            name="email"
                            value={state.userInfo.email}
                            onChange={handleChange}
                        />
                        <p>{state.userError.email}</p>
                    </main>
                    <main className="Loginmain">
                        <label className="loginlabel">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="login-input"
                            name="password"
                            value={state.userInfo.password}
                            onChange={handleChange}
                        />
                          <p>{state.userError.password}</p>
                    </main>
                    <div className="login-options">
                        <label>
                            <input type="checkbox" /> Keep Me Logged In
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>
                </article>
                <div className="login-btn">
                    <span className="loginbtnspan">
                        Don’t have an account? <p className="signup-link" onClick={() => navigate("/signuppage")}>Sign Up</p> here
                    </span>
                    <button className="login-button" type="submit">Login</button>

                </div>

            </form>
        </div>
    );
};

export default Login;
