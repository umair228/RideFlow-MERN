import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-top h-screen pt-8 flex justify-between flex-col w-full bg-red-500'>
                <img className='w-16 ml-9' src='https://static.thenounproject.com/png/3381642-200.png'/>
                <div className='bg-white pb-7 py-4 px-4'>
                    <h2 className='text-3xl font-bold'>Get started with RideFlow</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
                </div>
            </div>

        </div>
    );
};

export default Home;