import React from 'react'
import { server } from '../../main'
import { UserData } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const navigate = useNavigate()
  const { user, isAuth } = UserData()

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
      {isAuth ? (
        <>
          {user && user.role !== "admin" ?
            <>
              {
                user.subscription.includes(course._id) ?
                  <button type="button" onClick={() => navigate(`/course/study/${course._id}`)} className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn Now</button>
                  :
                  <button type="button" onClick={() => navigate(`/course/${course._id}`)} className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>
              }
            </>
            :
            <button type="button" onClick={() => navigate(`/course/study/${course._id}`)} className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn Now</button>
          }
        </>
      ) :
        (
          <button type="button" onClick={() => navigate('/login')} className="text-white ml-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy Now</button>

        )
      }

    </div>
  )
}

export default CourseCard