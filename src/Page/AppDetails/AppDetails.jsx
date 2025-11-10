import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';
import download from './../../assets/icon-downloads.png'
import rating from './../../assets/icon-ratings.png'
import like from './../../assets/Like.svg'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { getItemFromStorage, updateItemToStorage } from '../../LocalStorage/LocalStorage';
import Loader from '../../components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';
import AppError from '../AppError/AppError';

const AppDetails = () => {
    const { Apps } = useApps();
    const { id } = useParams();
    const [include, setInclude] = useState(false)

    const clickedApp = Apps.find(App => (App.id == id))
    console.log(clickedApp)

    if(isNaN(id) || (Apps.length > 0 && !clickedApp )  )
    {
        return <AppError></AppError>
    }









    
    useEffect(() => {
        const installedApps = getItemFromStorage()
        if (installedApps.includes(id))
            setInclude(true)

    }, [id])

    const handleInstall = (id) => {
        updateItemToStorage(id)
        setInclude(true)
    }


    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings
        , description
    } = clickedApp || 0


    return (
        !clickedApp ? <div className="flex items-center justify-center min-h-screen">
            <Loader /> 
        </div> :
            <div className='px-0 md:px-[30px] lg:px-[80px] pb-[70px]'>
                <section className='pt-[80px]  w-fit mx-auto md:w-full md:mx-0 flex flex-col md:flex-row gap-10 pb-[30px] border-b border-[#001931]/20 '>
                    <div className='w-[250px]'>
                        <img className='w-full' src={image} alt="" />
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-[#001931] font-bold text-2xl font-[inter] pb-1'>{title}</h1>
                        <p className='text-[#627382] font-[inter] pb-5 border-b border-[#001931]/20 w-full'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span></p>


                        <div className='pt-[20px] flex items-center gap-[27px]'>
                            <div>
                                <div className='h-[30px] w-[30px]'>
                                    <img className='h-full w-full' src={download} alt="" />
                                </div>
                                <p className='py-1 text-[#001931] font-[inter] text-[0.8rem]'>Downloads</p>
                                <h1 className='text-[#001931] font-bold text-2xl font-[inter]'>{downloads}</h1>
                            </div>

                            <div>
                                <div className='h-[30px] w-[30px]'>
                                    <img className='h-full w-full' src={rating} alt="" />
                                </div>
                                <p className='py-1 text-[#001931] font-[inter] text-[0.8rem]'>Average Ratings</p>
                                <h1 className='text-[#001931] font-bold text-2xl font-[inter]'>{ratingAvg}</h1>
                            </div>

                            <div>
                                <div className='h-[30px] w-[30px]'>
                                    <img className='h-full w-full' src={like} alt="" />
                                </div>
                                <p className='py-1 text-[#001931] font-[inter] text-[0.8rem]'>Total Reviews</p>
                                <h1 className='text-[#001931] font-bold text-2xl font-[inter]'>{reviews}</h1>
                            </div>
                        </div>


                        <button disabled={include} onClick={() => {
                            handleInstall(id)
                            toast(`Installed Successfully`)
                        }} className={`btn mt-[20px] text-[inter] ${include ? 'bg-gray-400' : 'bg-[#00D390]'} text-white`}>
                            {
                                include ? 'Installed' : `Install Now (${size} MB)`
                            }
                        </button>
                    </div>
                </section>

                <div className='pt-[40px] pb-[30px] border-b border-[#001931]/20  '>
                    <h1 className='pb-[20px] text-center font-bold font-[inter] text-2xl md:text-start'>Ratings</h1>
                    <ResponsiveContainer width='100%' height={350} >
                        <BarChart
                            data={ratings}
                            layout="vertical"
                             margin={{ top: 20, right: 50, left: 20, bottom: 10 }}
                        >
                            <XAxis type='number'
                                interval={0} axisLine={false} tickLine={false}   ></XAxis>
                            <YAxis
                                dataKey="name" type="category" reversed axisLine={false} tickLine={false} ></YAxis>
                            <Tooltip></Tooltip>
                            <Bar dataKey="count" fill="#F81" barSize={32} ></Bar>
                        </BarChart>
                    </ResponsiveContainer>


                </div>

                <div className='pt-[30px]'>
                    <h1 className='pb-[20px] text-center font-bold font-[inter] text-2xl md:text-start'>
                        Description
                    </h1>

                    <p className=' text-justify  px-3 md:px-0 text-[#627382] font-[inter] font-xl leading-8 '>{description}</p>
                      <ToastContainer
                      position='top-center'
                      autoClose={2000}
                      />
                </div>
                
            </div>
            
    );
};

export default AppDetails;