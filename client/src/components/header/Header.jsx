import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Header = ({isAuth}) => {
  const location = useLocation(); 
  const isNotHomePage = location.pathname !== '/';
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
    <header
      className={`absolute inset-x-0 top-0 z-10 w-full ${
        isNotHomePage ? 'bg-black' : ''
      }`}
    >
    <motion.div
      className="px-4 mx-auto sm:px-6 lg:px-8"
      variants={fadeInFromTop}  // Using fadeInFromTop for header animation
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center justify-between h-16 lg:h-20 gap-10">
        <div className="flex-shrink-0 items-center">
          <a href="#" title="" className="flex text-white text-3xl ">
            LearnMore
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
        {isAuth?(
        <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
        <Link
          to="/account"
          title="Log in"
          className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
        >
          Account
        </Link>
        
        </div>)
        :(    <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
          <Link
            to="/login"
            title="Log in"
            className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
          >
            Log in
          </Link>
          <Link
            to='/register'
            title=""
            className="lg:flex hidden items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
            role="button"
          >
            Register
          </Link>
        </div>)
        }



    
      </div>
    </motion.div>
  </header>

  )
}

export default Header