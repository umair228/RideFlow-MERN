import React, {useState, useContext} from 'react';
import FormsHeader from "./FormsHeader.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {CaptainDataContext} from "../context/CaptainContext.jsx";

const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {captain, setCaptain}= useContext(CaptainDataContext);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captain={
            email,
            password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

        if (response.status === 200) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }

        setEmail('');
        setPassword('');

    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <FormsHeader/>
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="email@example.com"
                    />
                    <h3 className='text-lg font-medium'>Enter your password</h3>

                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                    />
                    <button className='bg-[#111] text-white font-semibold mt-7 mb-7 rounded px-4 py-2 w-full text-lg'>
                        Login
                    </button>
                </form>
                <div>
                    <p className='text-center'>Register with us? <Link to='/captain-signup' className='text-blue-500'> Become a captain!</Link></p>
                </div>
            </div>
            <div>
                <Link to='/login' className='inline-flex justify-center border-4 bg-[orange] text-white font-semibold mt-7 mb-7 rounded px-4 py-2 w-full text-lg'>
                    Login as User
                </Link>
            </div>

        </div>
    );
};

export default CaptainLogin;