import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-8'>
        <h2 className='bg-black text-white uppercase px-10 py-4 rounded-full'>Target Audience</h2>
        <button className='bg-gray-100 px-10 py-4 uppercase rounded-3xl tracking-wide text-sm'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar