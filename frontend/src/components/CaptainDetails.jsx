import React from 'react';

const CaptainDetails = () => {
    return (
        <div>
            <div className={'h-1/2 p-6 bg-white flex flex-col justify-start'}>
                <div className={'flex items-center justify-between mb-6'}>
                    <div className={'flex items-center gap-3'}>
                        <img
                            className={'h-20 w-20 rounded-full object-cover'}
                            src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"
                            alt=""
                        />
                        <h4 className={'text-xl font-medium'}>Haris Khan</h4>
                    </div>
                    <div>
                        <h4 className={'text-xl font-semibold'}>PKR 500.00</h4>
                        <p className={'text-base font-medium text-gray-600'}>Earned</p>
                    </div>
                </div>
                <div className={'flex justify-around items-center'}>
                    <div className={'text-center'}>
                        <i className={'text-2xl font-thin ri-timer-2-line'}></i>
                        <h5 className={'text-lg font-medium'}>10.2</h5>
                        <p className={'text-base text-gray-600'}>Hours Online</p>
                    </div>
                    <div className={'text-center'}>
                        <i className={'text-2xl font-thin ri-speed-up-line'}></i>
                        <h5 className={'text-lg font-medium'}>150</h5>
                        <p className={'text-base text-gray-600'}>per/Km</p>
                    </div>
                    <div className={'text-center'}>
                        <i className={'text-2xl font-thin ri-booklet-line'}></i>
                        <h5 className={'text-lg font-medium'}>3</h5>
                        <p className={'text-base text-gray-600'}>Messages</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;