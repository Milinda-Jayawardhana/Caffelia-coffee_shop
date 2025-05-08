import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  const [startAnimation, setStartAnimation] = useState(false);

  // Trigger the animation after 1 second
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 1000);
  }, []);

  return (
    <div className='relative bg-[#000000] min-h-screen'>
      <div className='sticky top-0 z-40'>
        <Header />
      </div>

      {/* Framer Motion div to animate the right 30% green background */}
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: startAnimation ? '25%' : '0%' }}
        transition={{ duration: 1 }} // 1 second transition duration
        className='absolute top-0 right-0 h-full bg-[#edcb87f8] rounded-l-[180px]'
      />

      <Outlet />
      
    </div>
  );
}

export default App;
