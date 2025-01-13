import React from 'react';

const LocationSearchPanel = (props) => {
    {/* Sample location */}
    const locations=[
        "24B, Near Home Location, Islamabad",
        "25A, Near Home Location, Islamabad",
        "26B, Near Home Location, Islamabad",
        "27C, Near Home Location, Islamabad"
    ]

    return (
        <div>
            {/* Location search panel */}
            {
                locations.map((location, index) => (
                    <div onClick={()=>{
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} key={index} className='flex items-center justify-start border-2 active:border-black'>
                        <h2 className='bg-[#eee] h-10 w-16 flex items-center justify-center rounded-full'><i
                            className='ri-map-pin-fill'></i></h2>
                        <h4>{location}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default LocationSearchPanel;