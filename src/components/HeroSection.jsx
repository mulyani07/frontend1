import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center px-4 md:px-0'>
            <div className='flex flex-col gap-5 my-10 max-w-5xl mx-auto'>
                <span
                    className="mx-auto px-4 py-2 rounded-full font-semibold text-gray-900"
                    style={{ background: 'linear-gradient(90deg, #EDE9FE 0%, #D9F99D 100%)' }}
                >
                    Your Gateway to the Perfect Job
                </span>

                <h1 className='text-3xl md:text-5xl font-bold'>
                    Search, Apply & <br />
                    Get Your <span className='text-[#6A38C2]'>Dream Jobs</span>
                </h1>

                <p className='text-sm md:text-base px-2 md:px-0'>
                    HireQuest is a user-friendly platform that connects skilled professionals with companies looking for the best talent. <br /> 
                    Whether you’re searching for your next job or the perfect hire, HireQuest makes the process simple and efficient, helping you reach your goals faster.
                </p>

                <div className='flex w-full md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full text-sm md:text-base'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] p-2 md:p-3">
                        <Search className='h-4 w-4 md:h-5 md:w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
