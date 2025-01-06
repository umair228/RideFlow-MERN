import React, {useState} from 'react';
import FormsHeader from "./FormsHeader.jsx";
import {Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const generateUsername = (firstName, lastName) => {
        return `${firstName}${lastName}${uuidv4().slice(0, 8)}`;
    };


    const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
            fullName: {
                firstName,
                lastName
            },
            username: generateUsername(firstName, lastName),
            email,
            password
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');


    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <FormsHeader/>
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg w-1/2 font-medium mb-2'>What's your name</h3>
                    <div className='flex gap-4 mb-6'>
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type='text'
                            placeholder='first name'
                        />
                        <input
                            className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type='text'
                            placeholder='last name'
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    <input
                        className='bg-[#eeeeee] rounded px-4 py-2 mb-6 border w-full text-lg placeholder:text-base'
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
                        Sign up
                    </button>
                </form>
                <div>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-500'> Login</Link></p>
                </div>
            </div>

            <div className='text-xs text-gray-500 text-center mt-4'>
                By signing up, you agree to our <Link to='#' className='text-blue-500'>Privacy Policy</Link>.
            </div>
            </div>
    );
};

export default UserSignup;