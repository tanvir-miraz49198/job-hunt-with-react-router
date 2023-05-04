import React from 'react';

const JobCategory = ({job}) => {
const {logo, category_name, job_available} = job;
  return (
    <div className='bg-gray-200 h-48 min-h-full lg:w-[93%] pt-8 rounded-md'>
<figure className='pl-4'><img src={logo} alt="Logo" className='bg-slate-300 p-3 rounded-md' /></figure>
   <div className='mt-5 pt-2 pl-3'>
   <h3 className='text-2xl font-bold'>{category_name}</h3>
      <p className='text-gray-500'>{job_available}</p>
   </div>
    </div>
  );
};

export default JobCategory;