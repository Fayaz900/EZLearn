import React from 'react'
import { CourseData } from '../../../context/CourseContext'
import CourseCard from '../../courseCard/CourseCard';

function Courses() {
    const {courses} = CourseData()
    
    // const coursesData = [
    //   {
    //     title: 'The Complete 2024 Web Development Bootcamp',
    //     instructor: 'Dr. Angela Yu',
    //     rating: '4.7 (407,923)',
    //     price: '549',
    //     originalPrice: '3,099',
    //     bestseller: true,
    //   },
    //   {
    //     title: 'The Web Developer Bootcamp 2024',
    //     instructor: 'Colt Steele',
    //     rating: '4.7 (276,477)',
    //     price: '549',
    //     originalPrice: '3,499',
    //     bestseller: false,
    //   },
    //   {
    //     title: 'Web Development Masterclass - Online Certification',
    //     instructor: 'YouAccel Training',
    //     rating: '4.3 (9,979)',
    //     price: '549',
    //     originalPrice: '3,299',
    //     bestseller: false,
    //   },
    // ];
    
  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap justify-center items-center mt-24'>
      {courses.map((course, index) => (
         <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  )
}

export default Courses