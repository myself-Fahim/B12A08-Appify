import React from 'react';
import { Link, Links, useNavigate } from 'react-router';
import playStore from './../../assets/PlayStore_Icon.svg'
import appStore from './../../assets/AppStore.svg'
import phone from './../../assets3/hero.png'
import HomeCard from '../../components/HomeCard/HomeCard';
import useApps from '../../Hooks/useApps';
import Loader from '../../components/Loader/Loader';



const Home = () => {

    const { Apps, Loading } = useApps();
    // console.log(Apps)
    const AppsData = Apps.slice(0, 8)
    const navigate = useNavigate()

    const navigateDetails = (id) => {
        navigate(`details/${id}`)
    }


    const handlePlayStore = () => {
        window.open("https://play.google.com/store/apps?hl=en", "_blank")
    }

    const handleAppStore = () => {
        window.open("https://www.apple.com/app-store/", "_blank")
    }

    return (

        <div className=' pt-[80px]'>
            <section className='lg:px-[80px]'>
                <h1 className='text-center font-[inter] text-[#001931] text-[2rem] md:text-[3rem] lg:text-[4rem] font-bold'>We Build<br /><span className='bg-gradient-to-r
                 from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps
                </h1>

                <p className='text-center text-[#627382] mt-[16px] pb-[40px] font-[inter]'>
                    At Appify, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className='flex justify-center gap-[16px] pb-[40px]'>
                    <Link onClick={handlePlayStore} className='flex items-center gap-[10px] btn btn-outline w-fit
                    border-[#D2D2D2] bg-yellow-50'>
                        <div className='h-[25px] w-[25px]'>
                            <img className='w-[100%] h-[100%]' src={playStore} />
                        </div>
                        <h1>Google Play</h1>
                    </Link>

                    <Link onClick={handleAppStore} className='flex items-center gap-[10px] btn btn-outline w-fit
                    border-[#D2D2D2] bg-yellow-50'>
                        <div className='h-[25px] w-[25px]'>
                            <img className='w-[100%] h-[100%]' src={appStore} />
                        </div>
                        <h1>App Store</h1>
                    </Link>
                </div>
            </section>

            <section>
                <div className='w-fit mx-auto'>
                    <img src={phone} alt="" />
                </div>

                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  left-0 p-[80px]'>

                    <h1 className='text-center font-[inter] text-xl md:text-2xl lg:text-4xl text-white font-bold'>Trusted  by     Millions,  Built  for  You</h1>

                    <div className='flex flex-col lg:flex-row items-center justify-center gap-8 mt-[30px]'>
                        <div className='flex flex-col items-center justify-center px-3'>
                            <p className='font-[inter] text-white text-[0.8rem]'>Total Downloads</p>
                            <h1 className='py-2 font-bold font-[inter] text-4xl text-white '>29.6M</h1>
                            <p className='font-[inter] text-white text-[0.8rem]'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-3 '>
                            <p className='font-[inter] text-white text-[0.8rem]'>Total Reviews</p>
                            <h1 className='py-2 font-bold font-[inter] text-4xl text-white '>906K</h1>
                            <p className='font-[inter] text-white text-[0.8rem]'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col items-center justify-center px-3'>
                            <p className='font-[inter] text-white text-[0.8rem]'>Active Apps</p>
                            <h1 className='py-2 font-bold font-[inter] text-4xl text-white '>132+</h1>
                            <p className='font-[inter] text-white text-[0.8rem]'>31 more will Launch</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='pt-[80px] lg:px-[80px] pb-[80px]'>
                <div className='pb-[30px]'>
                    <h1 className='text-center font-bold text-4xl font-[inter] mb-[10px]'>Trending Apps</h1>
                    <p className='text-[#627382] font-[inter] text-center'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                {
                    Loading ? <Loader></Loader>
                        : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mx-auto pb-[40px]'>
                            {
                                AppsData.map(App => <HomeCard key={App.id} App={App}
                                    navigateDetails={navigateDetails} ></HomeCard>)
                            }
                        </div>
                }





                <div className='w-fit mx-auto'>
                    <Link to='/apps' className='btn bg-gradient-to-r px-5 from-[#632EE3] to-[#9F62F2] border'>
                        <h1 className='text-[white] font-[inter]'>Show All</h1>
                    </Link>

                </div>

            </section>

        </div>


    );
};

export default Home;