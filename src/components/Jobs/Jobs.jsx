import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Jobs = ({job}) => {
  const {company_logo, job_title, company_name, fulltime_or_parttime, location, remote_or_onsite, salary, id } = job;
  
  return (
    <div className="card overflow-hidden bg-base-100 shadow-xl">
   <div className='p-5 '>
   <img src={company_logo} className='w-[29%]' alt="Company Logo"/>
    <div className="card-body">
      <h2 className="lg:text-2xl lg:font-bold">{job_title}</h2>
      <p className='lg:text-2xl'>{company_name}</p>
      <div className='flex gap-3'>
       <span className='border text-purple-600 lg:text-xl lg:p-2 font-semibold rounded-md'><p>{remote_or_onsite}</p></span>
        <span className='border lg:p-2 text-purple-600 lg:text-xl font-semibold rounded-md'><p>{fulltime_or_parttime}</p></span>
      </div>
      <div className='flex gap-1 lg:gap-3 lg:text-xl'>
      <MapPinIcon className="h-6 w-8 " />
      <span><p>{location}</p></span>
      <CurrencyDollarIcon className="h-6 w-8" />
      <span><p>Salary: {salary}</p></span>
      </div>

        <Link to={`/jobdetails/${id}`}><button className="btn btn-primary">View Details</button></Link>
  
    </div>
   </div>
  </div>
  );
};

export default Jobs;