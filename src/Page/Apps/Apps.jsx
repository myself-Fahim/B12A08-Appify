import React, { useEffect, useState } from 'react';
import useApps from '../../Hooks/useApps';
import AllAppsCard from '../../components/AllAppsCard/AllAppsCard';
import Loader from '../../components/Loader/Loader';

const Apps = () => {
  const { Apps, Loading } = useApps();
  const [filterApp, setFilterApp] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)

  useEffect(() => {
    setFilterApp(Apps)
  }, [Apps])


  const handleInputChange = (e) => {
    setSearchLoading(true)
    setTimeout(() => {
      const value = e.target.value.split(' ').join('').toLowerCase();
      const newApp = Apps.filter(App => App.title.toLowerCase().includes(value));
      setFilterApp(newApp)
      setSearchLoading(false)
    }, 300)

  }



  return (
    <div className='pt-[80px]'>

      <div className='w-fit mx-auto pb-[46px]'>
        <h1 className='text-center mb-[10px] font-bold text-4xl font-[inter]'>Our All Applications</h1>
        <p className='text-[#627382] font-[inter] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>


      <section className='lg:px-[80px] pb-[30px] flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between'>
        <h1 className='font-[inter] font-bold text-xl '>({filterApp.length}) Apps Found</h1>
        <label className="input bg-transparent border-black">
          <svg className="h-[1em] opacity-60 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={handleInputChange} type="search" className="grow  text-[black] " placeholder="Search" />

        </label>
      </section>


      <section>
        {
          Loading || searchLoading ? <div className='min-h-screen flex justify-center items-center'>
            <Loader></Loader>
          </div> :
            filterApp.length === 0 ? <p className='text-center font-semibold text-[inter] text-2xl'>No App Found</p>

              : <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mx-auto pb-[40px] lg:px-[80px]'>
                {

                  filterApp.map(App => <AllAppsCard key={App.id} App={App}></AllAppsCard>)
                }
              </div>

        }
      </section>
    </div>
  );
};

export default Apps; <h1>From Apps</h1>