"use client"
import React, { useEffect, useState } from 'react'
import './style.css'
import { Button } from '@/components/ui/button'
import Card from '@/components/Cardinprofile'
import Header from '@/components/Header'
import axios from 'axios'
import Link from 'next/link'

const page = () => {
  const [user,setuser]=useState()

  const logout=async ()=>{
    try {
      const res=await axios.get("http://localhost:1406/user/logoutUser")
    } catch (error) {
      console.log("error")
    }
  }
useEffect(()=>{
  const getUserData=async ()=>{
    try {
      const res= await axios.get("http://localhost:1406/user/getUserData")
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getUserData()
},[])
  return (
    <body className='screen'>
      <Header/>
    <div className='main'>
      <div className="box1 c">
         <div className="circle text-[100px] bg-blue-200 font-bold text-center flex items-center justify-center"><p className='text-blue-800'>SM</p></div>
         <div className="info">
          Name=Sahil Kumar
          <br />
          Email=supersen14@gmail.com
          <br />
          Department=CSE
          <br />
          Role=Student
          <br />
          Courses=B-Tech
         </div>
         <div className="progress">
         
         </div>
         <div className="button gap-2">
         <Link href="/updateProfile"><Button className="bg-slate-800">Update Profile</Button></Link>
         <br />
         <br />
         <Link href="/signup"><Button variant="destructive"  onClick={logout}>Logout</Button></Link>
         </div>
      </div>
      <div  style={{ padding:"40px"}}className="box2 c ">
        <h1 className='heading'>Enrolled Courses</h1>
        <div className="flex gap-10 flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/></div>
      </div>
    </div></body>
  )
}

export default page