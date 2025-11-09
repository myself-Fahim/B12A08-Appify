import React from 'react';
import { useNavigate } from 'react-router';
import error from './../../assets3/App-Error.png'

const AppError = () => {
      const navigator = useNavigate()
    const handleNavigate = () =>{
        navigator(-1)
    }
    return (
        <div>
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className='w-[250px] h-[250px] pb-[16px]'>
                    <img className='h-full w-full' src={error} alt="" />
                </div>
                <h1 className='text-3xl font-[inter] font-bold pb-3'>OPPS!! APP NOT FOUND</h1>
                <p className='font-[inter] text-center md:text-start text-[#627382] text-[0.58] pb-5'>The App you are requesting is not found on our system.  please try another apps</p>

                <button onClick={handleNavigate} className='btn bg-gradient-to-r px-7 from-[#632EE3] to-[#9F62F2] border'>
                    <h1 className='text-[white] font-[inter]'>Go Back</h1>
                </button>

            </div>
        </div>
    );
};

export default AppError; <h1>AppError</h1>