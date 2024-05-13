import React from 'react'
import { HiOutlinePencil } from "react-icons/hi";

export default function User() {
  return (
    <div className=" h-screen">
        <div className="bg-white p-4 h-[90%] rounded shadow-md">
            <div className="border-2 rounded-md my-4">
                <div className="flex items-center m-4">
                    <img
                    className="w-20 h-20 rounded-full mr-4 object-cover"
                    src="https://via.placeholder.com/150" // Replace with your avatar image
                    alt="Profile avatar"
                    />
                    <div>
                    <h2 className="text-xl font-medium text-gray-800">John Doe</h2>
                    <p className="text-gray-600">Software Engineer</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-md my-8 ">
                <div className="flex items-center m-4">
                    <div className='grid grid-cols-3'>
                        <div className='w-full h-full col-span-3 justify-between items-center flex'>
                            <h2 className=" text-2xl font-medium text-black my-2">Personal Information</h2>
                            <button className='px-3 py-1 hover:bg-neutral-200 hover:no-underline rounded-md border-2 flex items-center'><HiOutlinePencil className='pr-0.5' />Edit</button>
                        </div>
                        <div className='w-screen h-full'>
                            <div className='my-5'>
                                <p className="text-gray-600">First Name</p>
                                <p className="text-black">Mike</p>
                            </div>
                            <div className='my-5'>
                                <p className="text-gray-600">Email Address</p>
                                <p className="text-black">mebguevara@addu.edu.ph</p>
                            </div>
                            <div className='my-5'>
                                <p className="text-gray-600">Age</p>
                                <p className="text-black">27</p>
                            </div>
                        </div>
                        <div className='w-screen h-full'>
                            <div className='my-5'>
                                <p className="text-gray-600">Last Name</p>
                                <p className="text-black">Mike</p>
                            </div>
                            <div className='my-5'>
                                <p className="text-gray-600">Mobile Number</p>
                                <p className="text-black">09278645326</p>
                            </div>
                        </div>
                        <div className='w-screen h-full'>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-md my-4">
                <div className="flex items-center m-4">
                    <div className='grid grid-cols-3'>
                    <div className='w-full h-full col-span-3 justify-between items-center flex'>
                            <h2 className=" text-2xl font-medium text-black my-2">Address</h2>
                            <button className='px-3 py-1 hover:bg-neutral-200 hover:no-underline rounded-md border-2 flex items-center'><HiOutlinePencil className='pr-0.5' />Edit</button>
                        </div>
                        <div className='w-screen h-full'>
                            <div className='my-5'>
                                <p className="text-gray-600">Province</p>
                                <p className="text-black">Davao del Sur</p>
                            </div>
                            <div className='my-5'>
                                <p className="text-gray-600">Country</p>
                                <p className="text-black">Philippines</p>
                            </div>
                        </div>
                        <div className='w-screen h-full'>
                            <div className='my-5'>
                                <p className="text-gray-600">City</p>
                                <p className="text-black">Davao City</p>
                            </div>
                            <div className='my-5'>
                                <p className="text-gray-600">Zip Code</p>
                                <p className="text-black">8000</p>
                            </div>
                        </div>
                        <div className='w-screen h-full'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
