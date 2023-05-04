import React from 'react';
import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

const JobDetailSection = (props) => {
  const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, address} = props.job
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className='grid lg:grid-cols-4 '>
      <div className='pt-8 col-span-3 px-4'>

       <div className='mb-8'>
       <h1 className='text-xl border-2 border-indigo-600 p-5 rounded'><span className='text-2xl font-bold'>Job Description:</span> {job_description}</h1>
      </div>

    <div  className='mb-8'>
    <h1 className='text-xl border-2 border-indigo-600 p-5 rounded'><span className='text-2xl font-bold '>Job REsponsibility:</span> {job_responsibility}</h1>
    </div>

    <div  className='mb-8'>
    <h1 className='text-xl border-2 border-indigo-600 p-5 rounded'><span className='text-2xl font-bold'>Educational Requirements:</span> {educational_requirements}</h1>
    </div>

    <div  className='mb-8'>
    <h1 className='text-xl border-2 border-indigo-600 p-5 rounded'><span className='text-2xl font-bold'>Experiences:</span> {experiences}</h1>
    </div>
      </div>
      <div className='col-span-1 rounded-md bg-violet-200 mt-8'>
        <h1 className='pl-4 pt-4 text-3xl font-bold pb-2'>Job Details</h1>
        <hr />

     <div className='py-8'>
     <span className='flex gap-3 pb-4 pl-4'><CurrencyDollarIcon className="h-8 w-8 text-violet-400" />  <p className='text-2xl'><span className='text-2xl font-bold'>Salary</span>: {salary}</p></span>

        <span className='flex gap-3 pb-4 pl-4'> <BriefcaseIcon className="h-8 text-violet-400 w-8" /> <p className='text-xl'><span className='text-2xl font-bold'>Job Title:</span> {job_title}</p></span>
        <h2 className='text-3xl font-bold p-2'>Contact Information</h2>
        <hr />
<div className='pt-8'>
<span className='flex gap-3 pb-4 pl-4'> <PhoneIcon className="h-8 text-violet-400 w-8" /> <p className='text-xl'><span className='text-2xl font-bold'>Phone:</span> {contact_information.phone}</p></span>

<span className='flex gap-3 pb-4 pl-4'> <EnvelopeIcon className="h-8 text-violet-400 w-8" /> <p className='text-xl'><span className='text-2xl font-bold'>Email:</span> {contact_information.email}</p></span>
<span className='flex gap-3 pb-4 pl-4'> <MapPinIcon className="h-8 text-violet-400 w-8" /> <p className='text-xl'><span className='text-2xl font-bold'>Address:</span> {address.city}</p></span>
</div> 
     </div>
     <button onClick={()=>handleAddToCart(props.job)} className='btn btn-primary w-[64%] block mx-auto mb-5'>Apply Now</button>
      </div>
    </div>
  );
};

export default JobDetailSection;