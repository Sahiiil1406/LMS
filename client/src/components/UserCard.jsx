import React from 'react'
import Link from 'next/link'
const UserCard = (props) => {
  return (
   <>
 <Link href={props.url}  style={{margin:"10px"}} className='w-full'>
  <div  className='bg-slate-800 p-0 flex rounded-lg w-full'><p>
    <div>Email:{props.email}</div>
    <div>Username: {props.username}</div>
    <div>Id:{props.id}</div>
    <div>Role:{props.role}</div>
  </p></div>
  </Link>

 </>
  )
}

export default UserCard