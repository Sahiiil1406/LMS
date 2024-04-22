"use client"
import React, { useState } from 'react'
import './style.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Header from '@/components/Header'
import axios from 'axios'

const updateCourse = () => {
  const [course,setcourse]=useState({
    courseCode:"",
    courseTitle:"",
    instructor:"",
    schedule:"",
    credits:null,
    description:"",
    department:""
  })
const update=async()=>{
  try {
    const res=await axios.post("http://localhost:1406/course/update",course)
  } catch (error) {
    console.log("Error",error)
  }
}

  return (
    <div> 
      <Header/>
        <h1 className='h'>Update Course</h1>
    <div className="main">
    <form  className="flex" action="">
<div className='flex-1'>    <p>Course Code</p>
    <Input placeholder="courseCode" className="text-black"
    value={course.courseCode} 
    onChange={(e)=>{setcourse({...course,courseCode:e.target.value})}}/>
    <br />
    <Input placeholder="courseTitle" className="text-black"
    value={course.courseTitle} 
    onChange={(e)=>{setcourse({...course,courseTitle:e.target.value})}}/>
    <br />
    <Input placeholder="description" className="w-[500px] text-black"

    style={{height:"100px"}}
    value={course.description} 
    onChange={(e)=>{setcourse({...course,description:e.target.value})}}/>
    <br /></div>
    <div className='flex-1'> 
    <Input placeholder="instructor" className="text-black"
    value={course.instructor} 
    onChange={(e)=>{setcourse({...course,instructor:e.target.value})}}/>
    <br />
    <Input placeholder="credits"  className="text-black"
    value={course.credits} 
    onChange={(e)=>{setcourse({...course,credits:e.target.value})}}/>
    <br />
    <Input placeholder="department"  className="text-black"
    value={course.department} 
    onChange={(e)=>{setcourse({...course,department:e.target.value})}}/>
    <br />
    <Input placeholder="schedule"  className="text-black"
    value={course.schedule} 
    onChange={(e)=>{setcourse({...course,schedule:e.target.value})}}/>
    <br />
    </div>
  
   
    
    </form>
    <Link href="/courses"> <Button className="bg-green-700" onClick={update} >Submit</Button></Link>
    </div>
    </div>
  )
}

export default updateCourse