import React, { useState } from 'react'
import './resetpassword.css'
import axios from 'axios'

import { useParams } from 'react-router'
import toast from 'react-hot-toast'

const url = "https://express-buy.onrender.com/api/v1"
const Reset = () => {
    const { token } = useParams()
    const [loading, setIsLoading] = useState(false)
    
    const [userInput, setUserInput] = useState({
        newPassword:"",
        confirmPassword: "",

    })
    const [userError, setUserError] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserInput({...userInput, [name]: value})

        if(userError[name]){
            setUserError({...userError, [name]: ""})
        }
    }


    const handleError = () => {
       let error = {}
        if(userInput.newPassword.trim() === ""){
            error.newPassword = "please enter a correct passowrd"
        }
        if(userInput.confirmPassword.trim() === "" || userInput.confirmPassword == !userInput.newPassword){
            error.confirmPassword = "please enter a correct confirmPassword"
        }
        if(Object.keys(error).length > 0){
            setUserError(error)
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
                const res =  await axios.post(`${url}/reset_password/user/:${token}`)
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
    <div className='Resetbody'>
      <form className='Resetmain' onSubmit={handleSubmit}>
       <h2>Reset password</h2> 
       <input type="email" className='Resetptag'
        placeholder='password' 
        name='newPassword'
        value={userInput.newPassword}
        onChange={handleChange}
        />
        <p>{userError.newPassword}</p>
          <input type="email" className='Resetptag'
        placeholder='confirmPassword' 
        name='confirmPassword'
        value={userInput.confirmPassword}
        onChange={handleChange}
        />
        <p>{userError.confirmPassword}</p>
        <button type='submit' className='Resetbutton'>{loading ? "loading..." : "Reset password"}</button>
      </form>
    </div>
  )
}

export default Reset

