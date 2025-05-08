import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";

export default function Home() {

    
    const [showOverlay, setShowOverlay] = useState(true);

  // Hide the overlay after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (

    <>
        {showOverlay && (
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 1 }} // Fades out after 1 second
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#cba65df8]"
            >
                {/* Brand Logo */}
                <h1 className="mb-6 font-extrabold text-white text-7xl">CAFFELIA</h1> {/* You can replace this with an image */}
                
                {/* Loading line animation */}
                <motion.div
                    className="h-[20px] bg-white w-[30%] absolute bottom-10 left-[70px] rounded-lg"
                    initial={{ width: '30%' }}        // Start with 30% width
                    animate={{ width: '90%' }}       // Animate to 100% width
                    transition={{ duration: 0.8 }}    // Complete the transition in 0.8 seconds
                />
            </motion.div>
        )}

        <div className='relative '>
            <div className='container flex justify-between text-white'>
                <div className=' flex flex-col w-[50%] ml-[60px] pt-[60px]'>
                    

                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }} // Start from the left side (off-screen)
                        animate={{ x: 0, opacity: 1 }}       // Move to the current position
                        transition={{ duration: 1, delay:1 }}          // Animation duration
                        className='flex flex-col pt-2 pb-8'
                    >
                        <h2 className=' text-2xl text-[#edcb87f8] font-semibold'>START A DAY WITH...</h2>
                        <h1 className='text-yellow-900 font-luckiest text-[75px]'>PURE LOVE OF COFFEE</h1>
                        <h2 className='text-2xl font-permanent'>Eat, Drink & Relax</h2>
                    </motion.div>
                        
                    <motion.div
                        initial={{ y: '100%', opacity: 0 }} // Start from below (off-screen)
                        animate={{ y: 0, opacity: 1 }}      // Move to the current position
                        transition={{ duration: 1, delay: 1 }} // 1 second duration, 1 second delay
                        className='flex gap-5 pt-6 pl-6'
                    >
                        <button className='bg-[#edcb87f8] rounded-lg p-2 text-yellow-900 font-semibold flex gap-2 justify-center items-center'>
                            <FaShoppingCart /> Online Order
                        </button>
                        <button className='flex items-center justify-center gap-2 p-2 font-semibold text-black bg-white rounded-lg'><MdDeliveryDining /> Free Delivery</button>
                    </motion.div>
                    
                    <div className='overflow-clip'> 
                        <motion.div
                            initial={{ y: '200%', opacity: 0 }} // Start from below (off-screen)
                            animate={{ y: 0, opacity: 1 }}      // Move to the current position
                            transition={{ duration: 1, delay: 1 }} // 1 second duration, 1 second delay
                            className='flex gap-8 pt-[70px]'
                        >
                            <img src="/5.png" alt="" className='h-[100px] bg-gray-200 rounded-lg p-2' />
                            <img src="/6.png" alt="" className='h-[100px] bg-[#edcb87f8] rounded-lg p-2' />
                            <img src="/7.png" alt="" className='h-[100px] bg-gray-200 rounded-lg p-2' />
                            <img src="/10.png" alt="" className='h-[100px] bg-[#edcb87f8] rounded-lg p-2' />
                            <img src="/8.png" alt="" className='h-[100px] bg-gray-200 rounded-lg p-2' />
                        </motion.div>
                    </div>
        
                </div>
                <div className='flex gap-10 '>
                    <div>
                        <motion.img
                            src="/11.png"
                            alt=""
                            className='h-[580px]'
                            initial={{ scale: 0.5, opacity: 0, rotate: 20 }}  // Start smaller, transparent, and rotated
                            animate={{ scale: 1, opacity: 1, rotate: -20 }}     // Grow to full size, opacity, and reset rotation
                            transition={{ duration: 1, delay: 1 }}            // 1 second duration and 1 second delay
                        />
                    </div>
                    <div className='flex items-center justify-center overflow-hidden'>
                        <motion.img 
                            src="/3.png"
                            alt=""
                            className='pb-10'
                            initial={{ y: '-100%', opacity: 0 }}  // Start from above the screen and invisible
                            animate={{ y: 0, opacity: 1 }}        // Move to the current position and become visible
                            transition={{ duration: 1, delay: 1 }} // 1 second duration with 0.5 second delay
                        />

                        <motion.img
                            src="/4.png"
                            alt=""
                            className=''
                            initial={{ y: '100%', opacity: 0 }}  // Start from above the screen and invisible
                            animate={{ y: 0, opacity: 1 }}        // Move to the current position and become visible
                            transition={{ duration: 1, delay: 1 }} // 1 second duration with 0.5 second delay
                        />  
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
