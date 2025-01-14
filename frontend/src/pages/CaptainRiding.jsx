import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import FinishRide from "../components/FinishRide.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null);

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    },[finishRidePanel])

    return (
        <div className={'h-screen'}>
            {/* Header Section */}
            <div className={'fixed p-3 top-0  z-10'}>
                <img className={'w-16'} src="https://static.thenounproject.com/png/3381642-200.png" alt="logo"/>
                <Link
                    to='/captain/logout'
                    className={'fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-md'}
                >
                    <i className={'text-3xl font-lg ri-logout-box-r-line'}></i>
                </Link>
            </div>

            {/* Upper Half Section */}
            <div className='h-4/5'>
                {/* image for temporary use  */}
                <img
                    className='h-full w-full object-cover'
                    src='https://images.prismic.io/superpupertest/75d32275-bd15-4567-a75f-76c4110c6105_1*mleHgMCGD-A1XXa2XvkiWg.png?auto=compress,format&w=1966&h=1068'
                    alt='backimage'
                />
            </div>
            {/* Lower Half Section */}
            <div onClick={() => {
                setFinishRidePanel(true);
            }}
                 className={'h-1/5 p-6 flex items-center justify-between bg-yellow-400'}>
                <h5 className={'p-1 h-[20%] w-[90%] text-center absolute'}
                    onClick={() => {

                    }}
                >
                    <i className='text-3xl text-black ri-arrow-up-wide-line'></i>
                </h5>
                <h4 className={'text-2xl font-semibold'}>4 KM Away</h4>
                <button className={'w-full mt-5  bg-green-600 text-white p-3 px-10 font-semibold rounded-lg'}>Complete
                    Ride
                </button>
            </div>


            <div ref={finishRidePanelRef}
                 className='h-screen fixed  w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white px-3 py-6 pt-12'>
                <FinishRide setFinishRidePanel={setFinishRidePanel}/>
            </div>
        </div>
    );
};

export default CaptainRiding;