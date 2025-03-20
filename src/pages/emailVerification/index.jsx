import React, { useEffect, useState } from 'react'
import './Verification.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'

import toast from 'react-hot-toast'

const url = "https://express-buy.onrender.com/api/v1"

const Email = () => {
    const { token } = useParams()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const res = await axios.get(`${url}/verify/user/${token}`)
            toast.success(res?.data?.message)
            console.log(res);
            if (res.status === 200) {
                setTimeout(() => {
                    navigate("/loginpage")
                }, 4000)
            }
        }
        catch (err) {
            console.log(err);
            toast.error(err?.data?.message)

        }
    }

    useEffect(() => {
        handleSubmit()
    }, [])
    return (
        <div className='Emailbody'>
            <form className='Emailmain'>
                <h2>{res.status == 200 ? <p className='Emailmainsuccess'>account verify successfully</p> : "Verifying  your account..."}</h2>
            </form>
        </div>
    )
}

export default Email
