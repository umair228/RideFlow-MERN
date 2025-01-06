import React, {useState} from 'react';
import FormsHeader from './FormsHeader.jsx';
import {Link} from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
            email,
            password
        });


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
                    <p className='text-center'>Don't have an account? <Link to='/signup' className='text-blue-500'> Create account</Link></p>
                </div>
            </div>
            <div>
                <Link to='/captain-login' className='inline-flex justify-center border-4 bg-[orange] text-white font-semibold mt-7 mb-7 rounded px-4 py-2 w-full text-lg'>
                    Login as Captain
                </Link>
            </div>

        </div>
    );
};

export default UserLogin;