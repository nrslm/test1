import React,{useState} from 'react'
import Logo from "../assets/image/Group 1.png"
import { Link } from 'react-router-dom'
import { Button } from '@mantine/core'

export default function Navbar() {
  
  const LogOut = () => {
    localStorage.clear("token")
  }

  return (
    <div className='shadow-md'>
      <div className='container mx-auto '>
        <div className='flex py-5 justify-between items-center'>
          <div className='flex gap-10 items-center '>
            <img src={Logo} alt="" className='w-10' />
            <Link to={""}>ABOUT</Link>
            <Link to={""}>GALLERY</Link>
            <Link to={""}>PRICING</Link>
            <Link to={""}>FAQ</Link>
          </div>
          <div className=''>
            <Button
              className='bg-pink-600'
              color="pink"
              onClick={() => LogOut()}
            >
              SIGN OUT
            </Button>
            <Button
              color="indigo"
              className='bg-indigo-600 ml-10'
            >
              SIGN IN
            </Button>
          </div>

        </div>
      </div>
    </div>

  )
}
