"use client"
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const enrollment = () => {
  const [enroll,setenroll]=useState([])

  const accept=async(uid)=>{
  try {
  const res=await axios.post("http://localhost:1406/enroll/accept",{id:uid})
  window.location.reload();
} catch (error) {
  console.log(error)
}}

  const decline=async(uid)=>{
     try {
      const res=await axios.post("http://localhost:1406/enroll/decline",{id:uid})
      window.location.reload();
     } catch (error) {
      console.log(error)
     }
  }

  useEffect(()=>{
    const getAllEnrollment=async()=>{
     try {
      const res=await axios.get("http://localhost:1406/enroll/getAll")
    /*   setenroll((res.data).enroll) */
      setenroll((res.data).enroll)
     } catch (error) {
      console.log(error)
     }
    }
    getAllEnrollment()
  },[])
  return (
    <>
    <Header/>
    <div className='flex flex-col items-center '>
      {
        enroll.map((e)=>{
          return <>
          <div key={e._id} className='border-0 mt-[10px] bg-slate-800 w-[80%]  rounded-2xl flex justify-between py-5 px-8 overflow-hidden items-center' >
             <div className='bg-slate-800' >
              <div><b>Email : </b>{e.userEmail}</div>
              <div><b>Id : </b>{e._id}</div>
              <div><b>CourseCode : </b>{e.courseCode}</div>  
             </div>
             <div className='flex gap-6 bg-slate-800 '>
             <Button className="bg-green-500" onClick={()=>accept(e._id)} >Accept</Button>
              <Button variant="destructive" onClick={()=>decline(e._id)} >Decline</Button>
             </div>
          </div>
          </>
        })
      }
    </div>
    </>
  )
}

export default enrollment