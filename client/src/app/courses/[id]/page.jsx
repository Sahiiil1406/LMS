"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
const params=useParams()
const id=params.id

const [data,setdata]=useState([])


const deleteCourse=async()=>{
  try {
    const res=await axios.get(`http://localhost:1406/course/deleteCourse/${id}`)

  } catch (error) {
    console.log(error)
  }
}

const enroll=async(course)=>{
  try {
    const res=await axios.post("http://localhost:1406/enroll/create",{
    userEmail:"iris",
    courseCode:{course}})
  } catch (error) {
    console.log("error")
  }
}

useEffect(()=>{
  const fetchData=async()=>{
    try {
    const res=await axios.get(`http://localhost:1406/course/getcoursebyId/${id}`)
    setdata((res.data).reqCourse)
    console.log((res.data).reqCourse)
    
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()

},[]) 
  return (

    <>
    <Header/>
    <div className='border  h-[300px] m-10  rounded-2xl bg-slate-800'>
    <div className='p-5 '>
      <h1>courseCode = {data.courseCode}</h1>
      <h1>courseTitle = {data.courseTitle}</h1>
      <h1>instructor = {data.instructor}</h1>
      <h1>schedule = {data.schedule}</h1>
      <h1>description = {data.description}</h1>
      <h1>credits = {data.credits}</h1>
      <h1>department = {data.department}</h1>
    </div>
    
    <div className='flex gap-3 p-5'>
     <Link href="/courses"><Button variant="destructive" onClick={deleteCourse} >Delete</Button></Link>
     <br />
    <Link href="/updateCourse"> <Button className="bg-slate-500" >Update Course</Button></Link>
    <br />
    <Button  className="bg-green-500" onClick={()=>enroll(data.courseCode)}>Enroll in Course</Button>
    </div>
    </div>
    </>

    
  )
}

export default page