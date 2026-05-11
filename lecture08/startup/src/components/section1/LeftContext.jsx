import React from 'react'
import { MoveUpRight } from 'lucide-react'

const LeftContext = () => {
    return (
        <div className="flex flex-col justify-between h-full w-1/3 px-5 py-5">
            <div>
                <h3 className='font-bold mb-5 text-4xl'>Propective <br /><span className='bg-gray-200 rounded-full py-1 px-1'>Customer</span> <br />Segmentation</h3>
                <p className='text-md py-8 text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nihil cumque. Earum, ipsum? Ipsam dolores nostrum veritatis veniam quisquam delectus.</p>
            </div>
            <div className='text-9xl'>
                <MoveUpRight size={50} color='black' />
            </div>
        </div>
    )
}

export default LeftContext