import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex justify-center items-center h-screen bg-neutral-300'>
        <div className='w-96 p-6 mb-10 shadow-lg bg-white rounded-md'>
            <h1 className='text-3xl block text-center font-semibold'>Login</h1>
            <hr className='mt-3'></hr>
            <div className='mt-3'>
                <label for="username" className='block text-base mb-2'>Username</label>
                <input type='text' id='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Username...'></input>
            </div>
            <div className='mt-3'>
                <label for="password" className='block text-base mb-2'>Password</label>
                <input type='password' id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password...'></input>
            </div>
            <div className='mt-5'>
                <Link to="/">
                <button className='border-2 border-neutral-700 bg-neutral-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-neutral-600'>
                    Login
                    </button> 
                </Link>    
            </div>
        </div>
    </div>
  )
}
