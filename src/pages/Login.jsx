import React, { useState } from 'react'
import Logo from "../assets/image/Group 1.png"
import Google from '../assets/image/image 2.png'
import { TextInput, Button, Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

// username: 'kminchelle',
//         password: '0lelplR',
function Login() {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const getApiData = async () => {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: email,
        password: pass,
      })
    }
    ).then((response) => response.json())
    .then(data => {
      navigate('/')
      localStorage.setItem('token', JSON.stringify(data.token))
    });
  };

  const ClickLogin = () => {
    getApiData()
  }

  return (
    <div className=''>
      <div className='flex h-screen w-full'>
        <div className='w-7/12 flex justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <img src={Logo} alt="" />
            <h1 className='text-4xl'>Login to your Account</h1>

            <button className='w-full hover:bg-slate-100 flex justify-center border-2 text-slate-400 py-2 my-10'>
              <img src={Google} alt="" />
              <p>Continue with Google</p>
            </button>

            <p className='text-slate-400'>------------- or Sign in with Email ------------- </p>

            <TextInput
              className='w-full my-2'
              type={"text"}
              label="Email"
              placeholder="Your email"
              size={"md"}
              onChange={(event) => setEmail(event.currentTarget.value)}
              error={error}
            />
            <TextInput
              className='w-full my-2'
              type={"password"}
              label="password"
              placeholder="Your password"
              size={"md"}
              onChange={(event) => setPass(event.currentTarget.value)}

            />

            <div className='flex justify-between w-full items-center my-2'>
              <Checkbox
                label="Remember Me"
                color="pink"
              />
              <p className='text-pink-600'>Forgot password?</p>
            </div>

            <Button
              color="pink"
              className='bg-pink-600 w-full mt-4'
              size="lg"
              onClick={() => ClickLogin()}
            >
              Settings
            </Button>
          </div>
        </div>

        <div className='bg-cover  h-full w-5/12' style={{ backgroundImage: `url("https://ukravto.ua/files/actros_exterior_55.jpg")` }} >

        </div>
      </div>
    </div>
  )
}

export default Login