import React from 'react';
import {Link} from "react-router-dom";

const Riding = () => {
    return (
        <div className={'h-screen'}>
            <Link to='/home ' className={'fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'}>
                <i className={'text-3xl ri-home-5-fill'}></i>
            </Link>

            <div className='h-1/2'>
                {/* image for temporary use  */}
                <img
                    className='h-full w-full object-cover'
                    src='https://images.prismic.io/superpupertest/75d32275-bd15-4567-a75f-76c4110c6105_1*mleHgMCGD-A1XXa2XvkiWg.png?auto=compress,format&w=1966&h=1068'
                    alt='backimage'
                />
            </div>

            <div className={'h-1/2 p-6'}>
                <div className={'flex items-center justify-between'}>
                    <img
                        className={'h-20'}
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
                        alt="car"/>
                    <div className={'text-right'}>
                        <h2 className={'text-lg font-medium'}>Haris</h2>
                        <h4 className={'text-xl font-semibold -mt-1 -mb-1'}>BDF-123</h4>
                        <p className={'text-sm text-gray-600'}>Corolla Gli 2011</p>
                    </div>
                </div>
                <div className={'flex gap-2 justify-between flex-col items-center '}>
                    <div className={'w-full mt-5 flex flex-col'}>

                        <div className={'flex items-center gap-5 border-b-2 mt-12'}>
                            <i className={' text-lg ri-map-pin-2-fill'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>562/11-A</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>Chaklala Cantt, Rawalpindi</p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-5 border-b-2 mt-6'}>
                            <i className={' text-lg ri-map-pin-user-fill'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>H153/2 Street 3</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>Chaklala Cantt, Rawalpindi</p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-5 border-b-2 mt-6'}>
                            <i className={' text-lg ri-currency-line'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>Cash</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>PKR 500.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={'w-full mt-5  bg-green-600 text-white p-2 font-semibold rounded-lg'}>Make a Payment</button>
            </div>
        </div>
    );
};

export default Riding;