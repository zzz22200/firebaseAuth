import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = localStorage.getItem('token')

        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            Home Page
        </div>
    )
}
