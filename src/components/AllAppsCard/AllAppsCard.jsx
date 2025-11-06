import React from 'react';
import download from './../../assets/icon-downloads.png'
import rating from './../../assets/icon-ratings.png'
import { Link, useNavigate } from 'react-router';

const AllAppsCard = ({ App }) => {
    const navigate = useNavigate()
    const detailsApp = () =>{
        navigate(`/details/${App.id}`)
    }

    return (
        <div>
            <div onClick={detailsApp}  className="card bg-base-100 rounded-[4px] p-[16px] shadow-sm hover:scale-105 transition ease-in-out">
                <figure className=' h-[316px] mx-auto '>
                    <img className='h-full w-full rounded-[8px]'
                        src={App.image}
                        alt="Shoes" />
                </figure>

                <div className='pt-3 font-bold font-[inter] text-[#001931] text-xl'>
                    <h1 className='pb-3'>{App.title}</h1>

                    <div className='flex justify-between'>
                        <Link className='flex gap-1 items-center text-[#00D390]
                        bg-[#F1F5E8] px-2 py-1 rounded-[4px]'>
                            <img className='w-3 h-3' src={download} />
                            <p className='font-[inter] text-[0.8rem]'>{App.downloads}</p>
                        </Link>

                        <div className='flex gap-1 items-center text-[#FF8811]
                        bg-[#F1F5E8] px-2 py-1 rounded-[4px]'>
                            <img className='w-3 h-3' src={rating} />
                            <p className='font-[inter] text-[0.8rem]'>{App.ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllAppsCard;