import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => {
    return currentPath === path 
      ? 'border-0 border-b-2 border-red-400 text-[#edcb87f8] rounded-[30px]  font-semibold' 
      : ' rounded-[30px] text-[#E6E6E6] border-transparent font-semibold';
  };

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop'  },
    { path: '/new', label: 'New Items' },
    { path: '/cart', label: 'Cart'},
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="">
      <div className='items-center justify-end hidden font-normal lg:flex md:flex sm:flex lg:flex-1'>
        <div className='flex-10'>
          <ul className='flex gap-8 text-[18px] '>
            {routes.map((route) => (
              <Link to={route.path} key={route.path}>
                <li className={`transition  cursor-pointer nav-item ${getActiveClass(route.path)}`}>
                  <motion.div
                    className="cursor-pointer rounded-[30px] bg-black "
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                  
                    <div className='flex items-center gap-1 p-1 px-2 nav-item-inner'>
                      
                      {route.label}
                    </div>
                  </motion.div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
