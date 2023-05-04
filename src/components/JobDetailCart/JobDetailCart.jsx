import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobDetailCart = ({jobInfo}) => {
  const {company_logo, job_title, company_name, fulltime_or_parttime, location, remote_or_onsite, salary, id } = jobInfo;
  return (
   <div className='mt-12 w-[75%] mx-auto border-2 items-center'>
 <div className="card card-side bg-base-100 p-2 shadow-xl">
  <figure className='bg-slate-200 p-2 rounded w-40 min-h-full'><img src={company_logo}alt="Company Logo"/></figure>
  <div className="card-body">
    <div>
    <h2 className="card-title text-2xl font-bold">{job_title}</h2>
    <p className='text-2xl card-actions justify-start'>{company_name}</p>
    </div>
    <div className='flex gap-3'>
       <span className='border text-purple-600 text-xl p-2 font-semibold rounded-md'><p>{remote_or_onsite}</p></span>
        <span className='border p-2 text-purple-600 text-xl font-semibold rounded-md'><p>{fulltime_or_parttime}</p></span>
      </div>
      <div className='flex gap-3 text-xl'>
      <MapPinIcon className="h-6 w-8" />
      <span><p>{location}</p></span>
      <CurrencyDollarIcon className="h-6 w-8" />
      <span><p>Salary: {salary}</p></span>
      </div>
    <div>
    <Link to={`/jobdetails/${id}`} className="card-actions  justify-end">
      <button  className="btn btn-primary -mt-12">View Details</button>
    </Link>
    </div>
  </div>
</div>
   </div>
  
  );
};

export default JobDetailCart;