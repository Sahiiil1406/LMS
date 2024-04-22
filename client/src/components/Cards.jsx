import React from 'react'
import '@/styles/Cards.css'
import Link from 'next/link'
const Cards = (props) => {
  return (
   <>
  
  <div className="card p-10" style={{padding:"10px"}}>
  
 <Link href={props.url}> <div class="bg">
  <div className='p-1'>courseCode:{props.Code}</div>
  <div className='p-1'>courseTitle:{props.Title}</div>
  <div className='p-1'>instructor:{props.instructor}</div>
  <div className='p-1'>credits:{props.credits}</div>
 </div>
  <div class="blob"></div></Link>
  
</div>

 </>
  )
}

export default Cards

