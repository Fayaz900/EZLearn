import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <motion.div
          className="px-4 mx-auto sm:px-6 lg:px-8"
          variants={fadeInFromTop}  // Using fadeInFromTop for header animation
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-between h-16 lg:h-20 gap-10">
            <div className="flex-shrink-0 items-center">
              <a href="#" title="" className="flex text-white text-3xl ">
                EZLearn
              </a>
            </div>
            <div className="hidden lg:flex lg:items-center mt-2 lg:justify-center lg:space-x-10">
              <motion.a
                href="#"
                title=""
                className="text-base items-baseline text-white transition-all duration-200 hover:text-opacity-80"
              >
                Home
              </motion.a>
              <motion.a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                Courses
              </motion.a>
              <motion.a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                About
              </motion.a>
              <motion.a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80"
              >
                Contact Us
              </motion.a>
            </div>
            <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
              <Link
                to="/login"
                title="Log in"
                className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
              >
                Log in
              </Link>
              <motion.a
                href="#"
                title=""
                className="lg:flex hidden items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                role="button"
              >
                Register
              </motion.a>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.section
        className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24"
        variants={fadeInFromBottom}  // Using fadeInFromBottom for the main content section
        initial="hidden"
        animate="visible"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
          <motion.div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold sm:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                Best Online Education with EZLearn.
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
    </motion.div>
  );
}

export default HomePage;
