"use client"
import './style.css'
import Header from '@/components/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '@/components/userCard'

const Admin = () => {
    const [user,setuser]=useState([]) 
    useEffect(()=>{
       
        const getAllUser=async()=>{
            try {
              const res=await axios.get("http://localhost:1406/user/getAllUser")  
              setuser((res.data).user)
              console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllUser();
    },[])
  return (<>
    <Header/>
    <div className='flex flex-col items-center pt-10 w-full gap-10 '>
      
         {
           user.map((e)=>{
            return <>
          <div className=' w-[80%]  ' style={{backgroundColor:"#070707", padding:"0px"}}>
          <UserCard key={e._id} email={e.email} id={e._id} username={e.name} role={e.roles} url={`/admins/users/${e._id}`} />
          </div>
            </>
           })
         }
    </div>
    </>)
}

export default Admin