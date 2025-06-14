import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector(store => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery && searchedQuery !== "All Jobs") {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job?.title?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job?.description?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job?.location?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job?.jobType?.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job?.general?.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });

      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5 px-4'>
        <div className='flex gap-5'>
          {/* Filter Section */}
          <div className='w-[20%] min-w-[200px]'>
            <FilterCard />
          </div>

          {/* Jobs List Section */}
          <div className='w-[80%] h-[88vh] overflow-y-auto bg-white rounded-2xl shadow-md border border-gray-200 p-6'>
            {
              filterJobs.length === 0 ? (
                <div className="w-full flex items-center justify-center">
                  <img
                    src="./src/images/notfound.png"
                    alt="Job not found"
                    className="w-60 h-auto my-10"
                  />
                </div>
              ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                    filterJobs.map((job) => (
                      <motion.div
                        key={job._id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Job job={job} />
                      </motion.div>
                    ))
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
