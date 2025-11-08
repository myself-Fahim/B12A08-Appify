import React from 'react';
import download from './../../assets/icon-downloads.png'
import rating from './../../assets/icon-ratings.png'
import { removeItemFromStorage } from '../../LocalStorage/LocalStorage';

const InstalledApps = ({ App, installedApps, setInstalledApps }) => {


    const handleUninstall = (id) =>{
        removeItemFromStorage(id)
        const updated = installedApps.filter(Id => Id !== String(id))
        setInstalledApps(updated)
    }
     

 
    const { image, size, title, ratingAvg, downloads,id } = App
    return (
        <div>
            <div className='bg-white p-3 mb-[20px] rounded-[4px] flex justify-between items-center'>
                <div className='flex gap-3'>
                    <div className='h-[60px] w-[60px]'>
                        <img className='h-full w-full rounded-[8px]' src={image} alt="" />
                    </div>
                    <div>
                        <p className='text-[#001931] font-bold text-xl font-[inter] pb-2'>{title}</p>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center '>
                                <img className='h-[13px] w-[13px] gap-0.5' src={download} />
                                <p className='text-[#00D390] font-bold  font-[inter]'>{downloads}</p>
                            </div>
                            <div className='flex items-center gap-0.5'>
                                <img className='h-[13px] w-[13px]' src={rating} />
                                <p className='text-[#FF8811] font-bold  font-[inter]'>{ratingAvg}</p>
                            </div>
                            <div className='flex items-center gap-0.5'>
                                <p className='text-[#627382] font-bold  font-[inter]'>{size} MB</p>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={()=>{
                  handleUninstall(id)

                }} className='btn  text-[inter] bg-[#00D390] text-white'>
                    Uninstall
                </button>



            </div>
        </div>
    );
};

export default InstalledApps;