import React from 'react';
import useApps from '../../Hooks/useApps';

const Apps = () => {
     const {Apps} = useApps();
  
    return (
        <div className='pt-[80px]'>

          <div className='w-fit mx-auto pb-[46px]'>
            <h1 className='text-center mb-[10px] font-bold text-4xl font-[inter]'>Our All Applications</h1>
            <p className='text-[#627382] font-[inter] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
          </div>
               
        </div>
    );
};

export default Apps;<h1>From Apps</h1>