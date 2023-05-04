import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';
import cartJobApplyed from './components/Loaders/cartJobApplyed';
import JobDetailSection from './components/JobDetailSection/JobDetailSection';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [{
    path: '/',
    element: <Home/>,
  },
  {  path: 'jobdetails/:id',
     element: <JobDetails/>,
     loader: () => fetch('/featuredJobs.json'),
  },
  {
    path: '/statistics',
    element: <Statistics/>,
  },
{
  path: '/appliedjobs',
  element: <AppliedJobs/>,
  loader: cartJobApplyed,
},
{
  path: '/blog',
  element: <Blog/>
},

]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

