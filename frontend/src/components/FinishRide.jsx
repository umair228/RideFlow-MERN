import React from 'react';
import {Link} from "react-router-dom";

const FinishRide = (props) => {
    const {setFinishRidePanel} = props;
    return (
        <div>
            <div>
                <h5
                    onClick={() => {
                        setFinishRidePanel(false)
                    }}
                    className={'p-1 text-center w-[93%] absolute top-0'}><i
                    className=' text-2xl text-black ri-arrow-down-wide-line '></i></h5>
                <h3 className={'text-2xl font-semibold mb-5'}>Finish this Ride!</h3>
                <div className={'flex items-center justify-between mb-6 bg-yellow-400 rounded '}>
                    <div className={'flex items-center gap-3'}>

                        <img className={'h-20 w-20 rounded-full object-cover'}
                             src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg" alt="profilepic"/>
                        <h4 className={'text-xl font-medium'}>Ahmed</h4>
                    </div>
                    <div>
                        <h4 className={'text-xl font-semibold'}>2.2 Km</h4>
                    </div>
                </div>
                <div className={'flex gap-2 justify-between flex-col items-center'}>
                    <div className={'w-full mt-5 '}>

                        <div className={'flex items-center gap-5 border-b-2'}>
                            <i className={' text-lg ri-map-pin-2-fill'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>562/11-A</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>Chaklala Cantt, Rawalpindi</p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-5 border-b-2'}>
                            <i className={' text-lg ri-map-pin-user-fill'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>H153/2 Street 3</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>Chaklala Cantt, Rawalpindi</p>
                            </div>
                        </div>
                        <div className={'flex items-center gap-5 border-b-2'}>
                            <i className={' text-lg ri-currency-line'}></i>
                            <div>
                                <h3 className={'text-lg font-medium'}>Cash</h3>
                                <p className={'text-sm -mt-1 text-gray-600'}>PKR 500.00</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={'mt-10 flex justify-center '}>
                            <Link to={'/captain-home'}
                                  className=" mt-5 bg-green-600 text-white p-2 text-center font-semibold rounded-lg"
                                  type="Submit">
                                Finish Ride
                            </Link>
                        </div>
                        <p className={'mt-10 text-sm'}>click on the "Finish Ride", if payment has been done!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinishRide;