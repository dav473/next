import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-slate-600 p-5'>
        <Link href={"/"} className="mr-2 text-white text-bold">Home</Link>
        <Link href={"/users"} className="mr-2 text-white text-bold">Users</Link>
    </div>
  )
}

export default Navbar