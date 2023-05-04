import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  return (
    <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8'>
      <div className='flex items-center justify-between '>
      <Link to ="/" className='inline-flex items-center'>
        
        <span className='ml-2 text-xl text-purple-600 font-extrabold tracking-wide text-gray-800'>Job Hunt</span>
      </Link>

      <ul className='items-center  hidden space-x-8 lg:flex font-bold'>
       <li>
        <NavLink to = "/" title='Home Link' className={({isActive}) => isActive ? 'active' : 'default'}>
          Home
        </NavLink>
       </li>

       <li>
        <NavLink to = "/statistics" title='Statistics Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Statistics
        </NavLink>
       </li>

       <li>
        <NavLink to = "/appliedjobs" title='Applied Jobs Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Applied Jobs
        </NavLink>
       </li>
       <li>
        <NavLink to = "/blog" title='Blog Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Blog
        </NavLink>
       </li>
       <button className='btn'>Star Applying</button>
      </ul>

      <div className='lg:hidden'>
        <button 
        aria-level='Open Menu'
        title='Open Menu'
        onClick={()=> setIsMenuOPen(true)}
        >
          <Bars3BottomRightIcon className='w-5 text-gary-600'/>
        </button>
        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full z-10'>
            <div className='pl-12 pb-12   '>
        
              <div className='flex items-center justify-between '>
              <div>
             
                    </div>

           
                    <div>
                      <button 
                       aria-level='Close Menu'
                       title='Close Menu'
                       onClick={()=> setIsMenuOPen(false)}
                       >
                         <XMarkIcon className='w-5 text-gary-600'/> 
                      </button>
                    </div>
              </div>

              <nav>
        <ul className='space-y-4 '>
       <li>
        <NavLink to = "/" title='Home Link' className='default   text-white'>
          Home
        </NavLink>
       </li>

       <li>
        <NavLink to = "/statistics" title='Statistics Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Statistics
        </NavLink>
       </li>

       <li>
        <NavLink to = "/appliedjobs" title='Applied Jobs Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Applied Jobs
        </NavLink>
       </li>
       <li>
        <NavLink to = "/blog" title='Blog Link' className={({isActive}) => isActive ? 'active' : 'default'}>
        Blog
        </NavLink>
       </li>
       <button className='btn'>Star Applying</button>
      </ul>
          </nav>
            </div>

          </div>
        )}

      </div>
    </div>
    </div>
  );
}
export default Navbar;
