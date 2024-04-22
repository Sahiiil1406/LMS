"use client"
import React, { useState } from 'react'
import {Button}  from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import axios from 'axios'
import Header from '@/components/Header'
import Link from 'next/link'

const updateProfile = () => {

const [user,setuser]=useState({
  email:"",
  name:"",
  programType:"",
  department:"",
  departmentId:""
})

   const updateUser=async()=>{
     try {
      const res=await axios.post("http://localhost:1406/user/updateUser",user)
     } catch (error) {
      console.log("Error")
     }
  } 
  return (
    <>
    <Header/>
    <form className='border border-white rounded-xl'>
      <Input placeholder="email" className="text-black"
      value={user.email} onChange={(e)=>{setuser({...user,email:e.target.value})}}></Input>
      <br />
      <Input placeholder="username" className="text-black"
      value={user.name} onChange={(e)=>{setuser({...user,name:e.target.value})}}></Input>
      <br />
      <Input placeholder="programType" className="text-black"
      value={user.programType} onChange={(e)=>{setuser({...user,programType:e.target.value})}}></Input>
      <br />
      <Input placeholder="department" className="text-black"
      value={user.department} onChange={(e)=>{setuser({...user,department:e.target.value})}}></Input>
      <br />
      <Input placeholder="deparment ID" className="text-black"
      value={user.departmentId} onChange={(e)=>{setuser({...user,departmentId:e.target.value})}}></Input>
      <br />
      <Link href="/admins/users"> <Button variant="destructive" onClick={updateUser} >Update</Button></Link>
    </form>
    </>
  )
}

export default updateProfile