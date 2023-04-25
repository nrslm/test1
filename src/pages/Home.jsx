import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Home() {
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))
        if(!token){
            navigate("/Login")
        }
    }, [])




    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
