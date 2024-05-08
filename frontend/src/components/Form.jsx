import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className='flex justify-center items-center h-screen bg-neutral-300'>
                <div className='w-96 p-6 mb-10 shadow-lg bg-white rounded-md'>
                    <h1 className='text-3xl block text-center font-semibold'>{name}</h1>
                    <hr className='mt-3'></hr>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Username</label>
                        <input
                            className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div className='mt-3'>
                        <label className='block text-base mb-2'>Password</label>
                        <input
                            className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <div className='mt-5'>
                        <button type="submit" className='border-2 border-neutral-700 bg-neutral-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-neutral-600'>
                            {name}
                        </button> 
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form