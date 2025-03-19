import React, { useEffect, useState } from 'react'
import './emailVerification.css'
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router'
import toast from 'react-hot-toast'

const url = "https://express-buy.onrender.com/api/v1"

const Email = () => {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')
    const navigate = useNavigate()

    const [message, setMessage] = useState("Verifying  your account...")

    const handleSubmit = async () => {
        try {
            const res = await axios.get(`${url}/verify/user/:${token}`)
            toast.success(res.data.message)
            console.log(res);
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/loginpage")
                }, 3000)
            }
        }
        catch (err) {
            console.log(err);
            setMessage("account can be verify")

        }
    }

    useEffect(() => {
        handleSubmit()
    }, [])
    return (
        <div className='Emailbody'>
            <form className='Emailmain'>
                <h2>{message}</h2>
            </form>
        </div>
    )
}

export default Email
