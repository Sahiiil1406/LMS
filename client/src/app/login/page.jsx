"use client"
import React, { useState } from 'react'
import './style.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import axios from 'axios'


const login = () => {
  const [user,setuser]=useState({
    email:"",
    password:""
  })
  const[loading,setloading]=useState(false)

  const loginUser=async(e)=>{
    try {
      setloading(true)
      const res=await axios.post("http://localhost:1406/user/loginUser",user)
     console.log(res.data)
    setloading(true)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
       <div className='main'>
        <div className="box">
        <form>
        <Input placeholder="Email" value={user.email}
        onChange={(e)=>setuser({...user,email:e.target.value})}/>
        <br />
        <Input placeholder="Password" value={user.password}
         onChange={(e)=>setuser({...user,password:e.target.value})}/>
        <br />
        <Link href="/profile"> <Button className="bg-green-700 text-white" onClick={loginUser} >
          {loading?"Processing":"Login"}</Button></Link>
        </form>
        </div>
    </div>
    </div>
  )
}

export default login