import React from 'react';

const LookingForDriver = (props) => {
    const {setVehicleFound} = props;
    return (
        <div>
            <h5
                onClick={() => {
                    setVehicleFound(false)
                }}
                className={'p-1 text-center w-[93%] absolute top-0'}><i
                className=' text-2xl text-black ri-arrow-down-wide-line '></i></h5>
            <h3 className={'text-2xl font-semibold mb-5'}>Looking for a Driver</h3>
            <div className={'flex gap-2 justify-between flex-col items-center'}>
                <img
                    className={'h-40'}
                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
                    alt="car"/>
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
            </div>
        </div>

    );
};

export default LookingForDriver;