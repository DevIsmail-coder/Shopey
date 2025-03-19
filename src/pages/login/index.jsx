import React, { useReducer, useState } from "react";
import './login.css'
import { useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const url = "https://express-buy.onrender.com/api/v1"
const Login = () => {
    const navigate = useNavigate()
      const [isLoading, setIsLoading] = useState(false)

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


    const handleChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: "USERINFO",
            payload: { name, value }
        })

    if(state.userError[name]){
        dispatch({
            type: "USERERROR",
            payload: {...state.userError, [name]: ""} 
        })
    }
    }

    const validation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleErr = () => {
        let error = {}
        if (state.userInfo.email.trim() === "" || !validation(state.userInfo.email)) {
            error.email = "please enter a correct email"
        }
        if (state.userInfo.password.trim() === "") {
            error.password = "please enter a correct password"
        }
        if(Object.keys(error).length > 0){
            dispatch({
                type: "USERERROR",
                payload: error
            })

            return false
        }

        else{
            console.log("successfully");
            
            return true
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!handleErr()) return 
       try{
        setIsLoading(true)
        const res = await axios.post(`${url}/login`, state.userInfo)
        setIsLoading(false)
        toast.success(res.data.message);
        navigate("/")
       }
       catch (err){
        toast.error(err);
        setIsLoading(false)

       }
        
    }

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p className="loginboxp">Enter Login details to get access</p>
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
                        <p className="logInputError">{state.userError.email}</p>
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
                          <p className="logInputError">{state.userError.password}</p>
                    </main>
                    <div className="login-options">
                        <label>
                            <input type="checkbox" /> Keep Me Logged In
                        </label>
                        <p className="forgot-password" onClick={() => navigate('/forgetpassword')}>Forgot Password?</p>
                    </div>
                </article>
                <div className="login-btn">
                    <span className="loginbtnspan">
                        Don’t have an account? <p className="signup-link" onClick={() => navigate("/signuppage")}>Sign Up</p> here
                    </span>
                    <button className="login-button" type="submit">{isLoading ? "loading..." : "Login"}</button>

                </div>

            </form>
        </div>
    );
};

export default Login;