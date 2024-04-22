"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const page = () => {
const params=useParams()
const id=params.id

const deleteUser=async()=>{
  try {
    const res=await axios.get(`http://localhost:1406/user/deleteUser/${id}`)
  console.log(res.data)
  } catch (error) {
    console.log("Error",error)
  }
}


const [user,setuser]=useState([])
useEffect(()=>{
  const fetchuser=async()=>{
    try {
    const res=await axios.get(`http://localhost:1406/user/getUserbyId/${id}`)
    setuser((res.data).existUser)
    console.log((res.data).existUser)
    
    } catch (error) {
      console.log(error)
    }
  }
  fetchuser()

},[]) 
  return (
<>
   <Header/>
    <div className='p-4'>

      <h1>Email={user.email}</h1>
      <h1>Roles={user.roles}</h1>
      <h1>Username={user.name}</h1>
      <div className='flex gap-2 mt-4'>
      <Link href="/updateProfile" ><Button  className='bg-green-500' >Update User</Button></Link>
      <Link href="/admins/users"><Button variant="destructive"  onClick={deleteUser}>Delete User</Button></Link>
     {/*  <Button variant="destructive"  onClick={logout}>Logout</Button> */}
      </div>
    </div></>
  )
}

export default page