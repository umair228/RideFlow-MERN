import React from 'react';

const VehiclePanel = (props) => {

const { setVehiclePanel, setConfirmRidePanel } = props;

    return (
        <div>
            <h5
                onClick={() => {
                    setVehiclePanel(false);
                }}
                className={'p-1 text-center w-[93%] absolute top-0'}><i
                className=' text-2xl text-black ri-arrow-down-wide-line '></i></h5>
            <h3 className={'text-2xl font-semibold mb-5'}>Choose a Vehicle</h3>
            <div
                onClick={() => {
                    setConfirmRidePanel(true);
                }}
                className='flex p-3 border-2 active:border-black rounded-xl mb-2 w-full items-center justify-between'>
                <img className='h-14'
                     src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
                     alt="rideflow-car"/>
                <div className={'w-1/2 ml-2'}>
                    <h4 className={'font-medium text-base'}>FlowGo <span><i className='ri-user-3-fill'>4</i></span>
                    </h4>
                    <h5 className={'font-medium text-sm'}>2 mins away</h5>
                    <p className={'font-normal text-xs text-gray-600'}>Affordable, compact rides</p>
                </div>
                <h2 className={'text-2xl font-semibold'}>PKR 500.00</h2>
            </div>
            <div
                onClick={() => {
                    setConfirmRidePanel(true);
                }}
                className='flex p-3 border-2 active:border-black rounded-xl mb-2 w-full items-center justify-between'>
                <img className='h-11'
                     src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png"
                     alt="rideflow-moto"/>
                <div className={'w-1/2'}>
                    <h4 className={'font-medium text-base'}>Moto <span><i className='ri-user-3-fill'>1</i></span>
                    </h4>
                    <h5 className={'font-medium text-sm'}>3 mins away</h5>
                    <p className={'font-normal text-xs text-gray-600'}>Affordable motorcylce rides</p>
                </div>
                <h2 className={'text-2xl font-semibold'}>PKR 200.00</h2>
            </div>
            <div
                onClick={() => {
                    setConfirmRidePanel(true);
                }}
                className='flex p-3 border-2 active:border-black rounded-xl mb-2 w-full items-center justify-between'>
                <img className='h-11'
                     src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
                     alt="rideflow-rickshaw"/>
                <div className={'w-1/2'}>
                    <h4 className={'font-medium text-base'}>FlowAuto <span><i
                        className='ri-user-3-fill'>3</i></span>
                    </h4>
                    <h5 className={'font-medium text-sm'}>3 mins away</h5>
                    <p className={'font-normal text-xs text-gray-600'}>Affordable rickshaw rides</p>
                </div>
                <h2 className={'text-2xl font-semibold'}>PKR 250.00</h2>
            </div>
        </div>
    );
};

export default VehiclePanel;