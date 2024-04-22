import React from 'react'
import Link from 'next/link'
const Card = (props) => {
  return (
    <div  className="hover:scale-110 duration-400">
        <Link href="props.url">
        <div className=" bg-slate-800 rounded-lg p-6">
            <div className="text-4xl  rounded-lg font-bold">MA110</div>
            <br />
            <div className="text-slate-400 "><span className=' '>Credits</span>: 4</div>
            <div className="text-slate-400 "><span className=' '>Instructor</span>: Sib Shankar Mol</div>
        </div></Link>
    </div>
  )
}

export default Card