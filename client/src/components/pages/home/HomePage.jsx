import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reviews from '../../reviews/Reviews';
import Footer from '../../footer/Footer';

const HomePage = () => {
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  // Adding fadeInFromTop
  const fadeInFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <motion.div 
      className="bg-[url('https://www.tailwindtap.com/assets/components/hero/fintech/backgradeint.png')] bg-cover bg-no-repeat w-full"
      initial="hidden"
      animate="visible"
    >
    

      <motion.section
        className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24 lg:min-h-[70vh] sm:min-h-max flex justify-center items-center"
        variants={fadeInFromBottom}  // Using fadeInFromBottom for the main content section
        initial="hidden"
        animate="visible"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <motion.div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                Best Online Education with LearnMore.
              </span>
            </h1>
            <p className="mt-5 text-base text-white sm:text-xl">
              Your Gateway to Knowledge and Growth...
            </p>
            <Link
              to='/courses'
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-pink-700 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
      className="flex flex-col lg:flex-row items-center lg:justify-between min-h-[40vh] p-4 lg:p-16 bg-gray-100"
      initial="hidden"
      animate="visible"
    >
      {/* Text Section */}
      <motion.div
        className="lg:w-1/2 w-full flex flex-col items-start justify-center space-y-6"
        variants={fadeInFromLeft} // Apply the animation for text section
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-black">
          Grow More with LearnMore
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Learning is Easy! <br />
          Welcome to LearnMore! Here we have courses on topics ranging from Physics, Chemistry and Biology to Neuroscience, Mathematics, and Economics. Go ahead, pick your topic and begin learning!
        </p>
        <button className="mt-4 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition">
          CHOOSE YOUR COURSE
        </button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 w-full mt-8 lg:mt-0"
        variants={fadeInFromRight} // Apply the animation for image section
      >
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-e-learning-goes-mobile-3d-illustration-of-book-and-smartphone-image_3864680.jpg" // Replace this with your image URL
          alt="image"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>

      <Reviews/>
      <Footer/>
    </motion.div>
  );
}

export default HomePage;
