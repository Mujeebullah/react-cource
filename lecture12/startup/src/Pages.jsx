import React from 'react'
import {Pagination} from 'react-bootstrap'

const Pages = () => {
  return (
    <Pagination>      
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{10}</Pagination.Item>      
      <Pagination.Item active>{12}</Pagination.Item>      
      <Pagination.Next />      
    </Pagination>
    
  )
}

export default Pages