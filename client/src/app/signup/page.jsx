"use client"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import "./style.css"
import Link from 'next/link'
import axios from 'axios'



const page = () => {

  const[user,setuser]=useState({
    name:"",
    email:"",
    password:""
  })
  const[loading,setloading]=useState(false)

  const signUp=async()=>{
    try {
      setloading(true)
      const res=await axios.post("http://localhost:1406/user/signupUser",user)
      console.log("Signup success",res.data)
      setloading(false)
    } catch (error) {
      console.log("Signup failed")
    }
  }
  return (
    <div className='main'>
       <form >
       <div className="box">
        <Input placeholder="Email" value={user.email} 
        onChange={(e)=>setuser({...user,email:e.target.value})}/>
        <br />
        <Input placeholder="Username" value={user.name}
        onChange={(e)=>setuser({...user,name:e.target.value})}/>
        <br />
        <Input placeholder="Password" value={user.password} 
        onChange={(e)=>setuser({...user,password:e.target.value})}/>
        <br />
        <Link href="/login"><Button className="bg-green-700 text-white" onClick={signUp}>{
          loading?"process":"submit"
        }</Button></Link>
        </div>
       </form>
    </div>
  )
}

export default page
