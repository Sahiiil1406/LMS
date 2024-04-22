import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className='flex  bg-slate-800 h-20 gap-20 p-8 text-white items-center '>
         
        <div className='  text-xl  italic flex-1 font-bold'>IRIS</div>
        
         <Link href="/courses" className='  hover:underline text-white'> <div >Courses</div></Link>
         <Link href="/enrollment" className=' hover:underline  text-white'> <div >Enrollment</div></Link>
          <Link href="/profile" className=' hover:underline  text-white'><div >Profile</div></Link>
        </header>
    </div>
  )
}

export default Header