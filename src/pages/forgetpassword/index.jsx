import React, { useState } from 'react'
import './forgetpassword.css'
import axios from 'axios'


const url = "https://express-buy.onrender.com/api/v1"
const Password = () => {
const [isLoading, setIsLoading] = useState(false)

    const [userInput, setUserInput] = useState('')
    const [userError, setUserError] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)

        if(userError){
            setUserError("")
        }
    }

    const validation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleError = () => {
       
        if(userInput.trim() === "" || !validation(userInput)){
            setUserError("please enter a correct email")
            return false
        }
        else{
           return true
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        if(!handleError()) return
        try{
            setIsLoading(true)
                const res =  await axios.post(`${url}/forgot_password/user`)
                console.log(res);
                setIsLoading(false)
                toast.success(res?.data?.message)   
            }
            catch(err){
                setIsLoading(false)
                console.log(err);
                if (err?.response && err?.response?.data && err?.response?.data?.message) {
                    toast.error(err?.response?.data?.message);
                } else {
                    toast.error("An error occurred. Please try again.");
                }
                
            }
        }
    
    
  return (
    <div className='Passwordbody'>
      <form className='Passwordmain' onSubmit={handleSubmit}>
       <h2>Forget password</h2> 
       <input type="email" className='passwordptag'
        placeholder='email' 
        value={userInput}
        onChange={handleChange}
        />
        <p>{userError}</p>
        <button type='submit' className='Passwordbutton'>{isLoading ? "loading..." : "Reset password"}</button>
      </form>
    </div>
  )
}

export default Password
