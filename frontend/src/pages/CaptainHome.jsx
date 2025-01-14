import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp.jsx";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(true);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

    const ridePopupPanelRef = useRef();
    const confirmRidePopupPanelRef = useRef();

    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ridePopupPanel])

    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePopupPanel])

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
            <div className='h-3/4'>
                {/* image for temporary use  */}
                <img
                    className='h-full w-full object-cover'
                    src='https://images.prismic.io/superpupertest/75d32275-bd15-4567-a75f-76c4110c6105_1*mleHgMCGD-A1XXa2XvkiWg.png?auto=compress,format&w=1966&h=1068'
                    alt='backimage'
                />
            </div>
            {/* Lower Half Section */}
            <CaptainDetails/>

            <div ref={ridePopupPanelRef}
                 className='fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white px-3 py-6 pt-12'>
                <RidePopUp setPopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
            </div>

            <div ref={confirmRidePopupPanelRef}
                 className='h-screen fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 bg-white px-3 py-6 pt-12'>
                <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setPopupPanel={setRidePopupPanel}/>
            </div>
        </div>
    );
};

export default CaptainHome;