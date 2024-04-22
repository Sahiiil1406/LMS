"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from "@/components/Cards"
import './style.css'
import Header from '@/components/Header';
import { useRouter } from 'next/router';


const courses = () => {
  
 
  const [data,setdata]=useState([])
  useEffect(()=>{
    const getAllCourses=async()=>{
    try {
    const res=await axios.get("http://localhost:1406/course/getAllCourses")
    setdata((res.data).allCourse)
    } catch (error) {
      console.log("error")
    }
  }
  getAllCourses()
},[])
  return (
    <>
    <Header />
      <div className='flex flex-wrap gap-16 p-6 '>
      {data.map((e)=>{
        return <Cards Code={e.courseCode} Title={e.courseTitle} instructor={e.instructor} credits={e.credits} key={e._id} url={`/courses/${e._id}`}
  />
      })}
      </div>
      
    </>
  )
}

export default courses