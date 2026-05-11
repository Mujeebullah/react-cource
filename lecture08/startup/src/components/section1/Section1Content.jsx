import React from 'react'
import LeftContext from './LeftContext'
import RightContent from './RightContent'

const Section1Content = () => {
  return (
    <div className='flex items-center gap-10 h-[70vh]'>
        <LeftContext />
        <RightContent />
    </div>
  )
}

export default Section1Content