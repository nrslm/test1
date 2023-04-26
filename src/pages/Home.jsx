import React from 'react'
import { useState, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom'
import { Tabs, Avatar, ScrollArea, Button, Modal, TextInput, Checkbox } from '@mantine/core'
import Logo from "../assets/image/Group 1.png"
import Google from '../assets/image/image 2.png'

export default function Home() {
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate()

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))
        if (!token) {
            navigate("/Login")
        }
    }, [])


    return (
        <div className='flex z-10'>
            <Modal opened={opened} onClose={close} title="Authentication">
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
                    />
                    <TextInput
                        className='w-full my-2'
                        type={"password"}
                        label="password"
                        placeholder="Your password"
                        size={"md"}
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
                    >
                        Settings
                    </Button>
                </div>
            </Modal>
            <div className='w-2/6 shadow-lg home_block pt-5 '>
                <Tabs defaultValue="list">
                    <Tabs.List>
                        <Tabs.Tab value="list" icon={""}>List</Tabs.Tab>
                        <Tabs.Tab value="messages" icon={""}>Messages</Tabs.Tab>
                        <Tabs.Tab value="settings" icon={""}>Settings</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="list" pt="xs">
                        <ScrollArea h={540} className={"px-4"}>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50 '>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div><div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div><div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-red-400 bg-red-300'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                            <div className='flex justify-between items-center p-2 m-2 hover:bg-slate-100 bg-slate-50'>
                                <h1>1. Akylbekov Nurislam</h1>
                                <Avatar
                                    src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                                    alt="it's me"
                                />
                            </div>
                        </ScrollArea>
                        <div className='flex justify-end mt-5 m-2'>
                            <Button
                                size={"md"}
                                color="indigo"
                                className='bg-indigo-600 px-10'
                                onClick={open}
                            >
                                Add +
                            </Button>
                        </div>
                    </Tabs.Panel>

                    <Tabs.Panel value="messages" pt="xs">
                        Messages tab content
                        <Avatar
                            component="a"
                            href="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                            target="_blank"
                            src="https://www.lego.com/cdn/cs/set/assets/blt6c65eb54dc9fb50e/DC_-_Character_-_Details_-_Sidekick-Standard_-_Superman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
                            alt="it's me"
                        />
                    </Tabs.Panel>

                    <Tabs.Panel value="settings" pt="xs">
                        Settings tab content
                    </Tabs.Panel>
                </Tabs>
            </div>
            <div className='w-4/6 home_block'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5847.5386295945345!2d74.56292434555826!3d42.87771294679069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86ab8c07f75%3A0xbc52cd6625964fd1!2z0J7RiCDQkdCw0LfQsNGA0Ys!5e0!3m2!1sru!2skg!4v1682502055386!5m2!1sru!2skg" ></iframe>
            </div>
        </div>
    )
}
