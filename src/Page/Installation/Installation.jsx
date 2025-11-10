import React, { useEffect, useState } from 'react';
import useApps from '../../Hooks/useApps';
import { getItemFromStorage } from '../../LocalStorage/LocalStorage';
import InstalledApps from '../../components/InstalledApps/InstalledApps';
import Loader from '../../components/Loader/Loader';
import { toast, ToastContainer } from 'react-toastify';




const Installation = () => {
    const { Apps } = useApps();
    const [installedApps, setInstalledApps] = useState(getItemFromStorage())
    const [sort, setSort] = useState('none')


    if (!Apps || Apps.length === 0) {
        return <div className='min-h-screen flex justify-center items-center'>
            <Loader></Loader>
        </div>
    }
    const installedAppsObj = installedApps.map(id => Apps.find(app => app.id == id))

    const toastFunc = () =>{
        toast('Uninstalled Successfully')
    }



    const sortData = (
        () => {
            if (sort === 'l2h') {
                const ascendingSort = [...installedAppsObj].sort((a, b) => a.size - b.size)
                return ascendingSort
            }
            else if (sort === 'h2l') {
                const descendingSort = [...installedAppsObj].sort((a, b) => b.size - a.size)
                return descendingSort
            }
            else
                return installedAppsObj
        }
    )()
    return (
        <div className='lg:px-[80px] min-h-screen  flex-1'>
            <div className='pb-[40px]'>
                <h1 className='pt-[80px] text-xl md:text-4xl text-center font-bold font-[inter]'>
                    Your Installed Apps
                </h1>
                <p className='text-center text-[#627382] mt-[16px] pb-[40px] font-[inter]'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className='pb-[16px] flex items-center justify-between'>
                <h1 className='text-2xl font-[inter] font-bold '>{installedAppsObj.length} App Found</h1>
                <fieldset className="fieldset">

                    <select value={sort} onChange={(e) => setSort(e.target.value)} defaultValue="Sort By Size" className="select border-none bg-black text-white font-bold ">
                        <option value={'none'} >Sort By Size</option>
                        <option value={'l2h'}>Low to High </option>
                        <option value={'h2l'}>High to Low</option>
                    </select>

                </fieldset>
            </div>
            <div>
                {
                    installedAppsObj.length ?
                        sortData.map(App => <InstalledApps key={App.id} App={App}
                            installedApps={installedApps}
                          setInstalledApps={setInstalledApps}
                          toastFunc={toastFunc}></InstalledApps>) : <p className='font-[inter] font-bold text-xl text-center'>No Installed Apps</p>
                }

            </div>
            <ToastContainer position='top-center' />
        </div>
    );
};

export default Installation;