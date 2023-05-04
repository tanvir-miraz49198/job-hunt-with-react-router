import React from 'react';
import Vector from '../../assets/All Images/Vector.png';
import Vector1 from '../../assets/All Images/Vector-1.png';
import 
 {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


const Statistics = () => {

  const assignmentMarks = [ 
  { id: 1, name: "First Assignment", marks: 60 },
  { id: 2, name: "Second Assignment", marks: 60},
  { id: 3, name: "Third Assignment", marks: 45},
  { id: 4, name: "Fourth Assignment", marks: 60},
  { id: 5, name: "Fifth Assignment", marks: 60},
  { id: 6, name: "Sixth Assignment", marks: 54},
  { id: 7, name: "Seventh Assignment", marks: 57},
  { id: 8, name: "Eighth Assignment", marks: 0},
  
];
  return (
<>
<div className='bg-gray-100 rounded -mt-24'>
 <div className='flex justify-between'>
 <img src={Vector} alt="" />
 <h2 className='text-center sm:mt-12 pt-12 font-bold text-3xl mb-5'>Assignment Marks Statistics</h2>
<img src={Vector1} alt="" />
 </div>
  </div>
  <AreaChart className='ml-6 mt-8 w-[64%]'
      width={700}
      height={200}
      data={assignmentMarks}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="marks"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca"
      />
   
    </AreaChart>
    </>
  );
};

export default Statistics;