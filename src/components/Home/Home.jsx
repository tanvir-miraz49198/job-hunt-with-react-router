import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import People from '../../assets/All Images/people.png';
import JobCategory from '../JobCategory/JobCategory';
import Jobs from '../Jobs/Jobs';
// import Jobs from '../Jobs/Jobs';

const Home = () => {
  const [jobCategory, setJobCategory] = useState([]);
  const [jobs, setJobs] = useState([])
  const [seeAllJobs, setSeeAllJobs] = useState(false);
  useEffect(()=>{
    fetch('/jobCategory.json')
    .then(res => res.json())
    .then(data => setJobCategory(data))
  },[]);

  useEffect(()=>{
    fetch('featuredJobs.json')
    .then(res => res.json())
    .then(data => setJobs(data))
  },[]);

const handleSellAllJob = ()=>{
  setSeeAllJobs(true);
};
const displayJobs = seeAllJobs ? jobs : jobs.slice(0, 4);
  return (
    <><div className='my-container flex flex-col items-center justify-between bg-gray-100 rounded lg:flex-row'>
    <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
      <div className='max-w-xl mb-6 lg:mt-8'>
        <h2 className='max-w-lg mb-6 font-sans lg:text-7xl text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
        One Step Closer To Your <br/> <span    className='text-purple-500'>Dream Job</span>
        
        </h2>
        <p className='text-base text-gray-400 md:text-lg'>
        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
        </p>
      </div>
      <div className='flex flex-col items-center md:flex-row'>
        <Link to='/' className='btn md:w-auto md:mr-4'>
          <div className='inline-flex items-center justify-center w-full h-full'>
            <p className='mr-3'>Get Started</p>
          </div>
        </Link>
      </div>
    </div>
    <div className='relative lg:w-1/2 '>
      <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
        <img src={People} alt="People" />
      </div>
    </div>
  </div>

  {/* Job Category List section start here  */}

    <div className='text-center my-5 py-5'>
    <h2 className='font-bold text-4xl'>Job Category List</h2>
    <p className='text-gray-400 pt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
    </div>
    <div className='grid lg:grid-cols-4 my-container gap-5'>
      {jobCategory.map(job =>
       <JobCategory
       key={job.category_name}
       job = {job}
      />)}
    </div>
  

  {/* Featured Jobs Section Start here */}

  
<div className='text-center my-5 py-5'>
  <h3  className='font-bold lg:text-4xl'>Featured Jobs</h3>
  <p className='text-gray-400 pt-3 px-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
</div>
<div className='grid lg:grid-cols-2 my-container gap-5'>
      {displayJobs.map(job => <Jobs 
      key={job.id}
      job={job}
      
      />)}
    </div>
      {!seeAllJobs && (<button onClick={handleSellAllJob} className='btn btn-primary block mx-auto mb-5'>See All Jobs</button>
      )}
  </>

  );
};

export default Home;