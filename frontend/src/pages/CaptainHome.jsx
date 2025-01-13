import React from 'react';
import {Link} from "react-router-dom";

const CaptainHome = () => {
    return (
        <div className={'h-screen'}>
            <div className={'fixed p-3 top-0 flex'}>
                <img className={'w-16'} src="https://static.thenounproject.com/png/3381642-200.png" alt="logo"/>
                <Link to='/home '
                      className={'fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full'}>
                    <i className={'text-3xl font-lg ri-logout-box-r-line'}></i>
                </Link>
            </div>

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
                    <div className={'flex items-center justify-start gap-3 '}>
                        <img className={'h-20 w-20 rounded-full object-cover'} src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" alt=""/>
                        <h4 className={'text-xl font-medium'}>Haris Khan</h4>
                    </div>
                    <div>
                        <h4 className={'text-xl font-semibold'}>PKR 500.00</h4>
                        <p className={'text-base font-medium text-gray-600'}>Earned</p>
                    </div>
                    <div className={'flex justify-center gap-5 items-start'}>
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
                            <h5>3</h5>
                            <p className={'text-base text-gray-600'}>Messages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaptainHome;