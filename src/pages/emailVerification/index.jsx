import React, { useEffect, useState } from 'react'
import './Verification.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import toast from 'react-hot-toast'

const url = "https://express-buy.onrender.com/api/v1"

const Email = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [isVerified, setIsVerified] = useState(false) 
    const [loading, setLoading] = useState(true)

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await axios.get(`${url}/verify/user/${token}`)
            toast.success(res?.data?.message)
            setLoading(false)
            console.log(res);
            if (res.status === 200) {
                setIsVerified(true) 
                setTimeout(() => {
                    navigate("/loginpage")
                }, 4000)
            }
        } catch (err) {
            console.log(err);
            toast.error(err?.response?.data?.message || "Verification failed")
        } finally {
            setLoading(false) 
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [])

    return (
        <div className='Emailbody'>
            <form className='Emailmain'>
                <h2>
                    {loading ? "Verifying your account..." : 
                        isVerified ? <p className='Emailmainsuccess'>Account verified successfully</p> : 
                        <p className='Emailmainerror'>Verification failed</p>
                    }
                </h2>
            </form>
        </div>
    )
}

export default Email
