"use client"
import React, { useState } from 'react'
import './style.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Header from '@/components/Header'
import axios from 'axios'


const createCoursePage = () => {
  
  const [course,setcourse]=useState({
    courseCode:"",
    courseTitle:"",
    instructor:"",
    schedule:"",
    credits:null,
    description:"",
    department:""
  })

  const createCourse=async()=>{
    try {
      const res=await axios.post("http://localhost:1406/course/create",course)
      console.log("success")
    } catch (error) {
      console.log(error)
    }}
  return (
    <div> 
      <Header/>
        <h1 className='h'>Create Course</h1>
    <div className="main">
    <form action="">
    <Input placeholder="courseCode" className="text-black"
    value={course.courseCode} onChange={(e)=>setcourse({...course,courseCode:e.target.value})}/>
    <br />
    <Input placeholder="courseTitle" className="text-black"
     value={course.courseTitle} onChange={(e)=>setcourse({...course,courseTitle:e.target.value})}/>
    <br />
    <Input placeholder="description" className="w-[500px] text-black"
    value={course.description} onChange={(e)=>setcourse({...course,description:e.target.value})}/>
    <br />
    <Input placeholder="instructor" className="text-black"
     value={course.instructor} onChange={(e)=>setcourse({...course,instructor:e.target.value})}/>
    <br />
    <Input placeholder="credits"  className="text-black"
    value={course.credits} onChange={(e)=>setcourse({...course,credits:e.target.value})}/>
    <br />
    <Input placeholder="department"  className="text-black"
    value={course.department} onChange={(e)=>setcourse({...course,department:e.target.value})}/>
    <br />
    <Input placeholder="schedule"  className="text-black"
    value={course.schedule} onChange={(e)=>setcourse({...course,schedule:e.target.value})}/>
    <br />
    <Link href="/courses"> <Button variant="destructive" onClick={createCourse} >Submit</Button></Link>
    </form>
    </div>
    </div>
  )
}

export default createCoursePage