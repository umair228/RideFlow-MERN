import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import FormsHeader from "./FormsHeader.jsx";
import {Link} from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext.jsx";
import axios from "axios";

const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {captain, setCaptain} = useContext(CaptainDataContext);
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState(0);
    const [vehicleType, setVehicleType] = useState('');
    const navigate = useNavigate();


    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData= {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email,
            password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType
            }
        }

        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token);
            navigate('/captain-home');
        }


        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity(0);
        setVehicleType('');

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
                    <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
<div className='flex gap-4 mb-6'>
    <input
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        value={vehicleColor}
        onChange={(e) => setVehicleColor(e.target.value)}
        type='text'
        placeholder='Vehicle Color'
    />
    <input
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        value={vehiclePlate}
        onChange={(e) => setVehiclePlate(e.target.value)}
        type='text'
        placeholder='Vehicle Plate'
    />
</div>
<div className='flex gap-4 mb-6'>
    <input
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        value={vehicleCapacity}
        onChange={(e) => setVehicleCapacity(e.target.value)}
        type='number'
        placeholder='Vehicle Capacity'
    />
    <select
        className='bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base'
        value={vehicleType}
        onChange={(e) => setVehicleType(e.target.value)}
    >
        <option value='' disabled>Select Vehicle Type</option>
        <option value='car'>Car</option>
        <option value='motorcycle'>Motorcycle</option>
        <option value='auto'>Auto Rickshaw</option>
    </select>
</div>
                    <button className='bg-[#111] text-white font-semibold mt-7 mb-7 rounded px-4 py-2 w-full text-lg'>
                        Register
                    </button>
                </form>
                <div>
                    <p className='text-center'>Already a captain? <Link to='/captain-login'
                                                                        className='text-blue-500'> Login</Link></p>
                </div>
            </div>

            <div className='text-xs text-gray-500 text-center mt-4'>
                By signing up, you agree to our <Link to='#' className='text-blue-500'>Privacy Policy</Link>.
            </div>
        </div>
    );
};

export default CaptainSignup;