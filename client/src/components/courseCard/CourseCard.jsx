import React from 'react'
import { server } from '../../main'

const CourseCard = ({course}) => {


  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 cursor-pointer">
    <img
      className="w-full h-48 object-cover"
    //   src="https://via.placeholder.com/150" // replace with actual image URL
    src={`${server}/${course?.image}`}
      alt="course"
    />
    <div className="p-4">
      <div className='flex items-center'>
        <h2 className="text-lg font-semibold">{course?.title}</h2>
      <p className="text-gray-600 ml-2"> by {course?.createdBy}</p>
      </div>
      
      <p className="text-gray-600"> {course.description}</p>
      <div className="flex items-center my-2">
        <span className="text-red-500 font-semibold">⭐ {course?.rating}</span>
        {/* <span className="text-red-500 font-semibold">⭐ 5 </span> */}
        {course?.bestseller && (
          <span className="ml-2 text-sm bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
            Bestseller
          </span>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <span className="text-xl font-bold text-gray-800">₹{course.price}</span>
        <span className="line-through text-gray-500">₹{course.originalPrice}</span>
      </div>
    </div>
  </div>
  )
}

export default CourseCard