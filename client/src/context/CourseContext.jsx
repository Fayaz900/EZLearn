import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { server } from "../main";

const CourseContext = createContext()

export const CourseContextProvider = ({children})=>{
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetchCourses()
    },[])

    async function fetchCourses () {
        try {
            const {data} = await axios.get(`${server}/api/course/all`)
            setCourses(data.courses)
        } catch (error) {
            console.log(error);
        }
    }

    return <CourseContext.Provider value={{courses, fetchCourses}}>{children}</CourseContext.Provider>
}

export const CourseData = () => useContext(CourseContext);