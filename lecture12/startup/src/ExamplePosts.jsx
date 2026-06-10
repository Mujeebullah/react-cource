import React from 'react'
import { useEffect } from 'react'
import ProjectPagination from './ProjectPagination';
import { useState } from 'react';
const ExamplePosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(prev => data)
        }
        getPost()
    },[posts])
    return (        
        posts.length > 0 ?      
        <ProjectPagination title='View Posts' data={posts} dataLimit={20} pageLimit={10}></ProjectPagination> : <div>Loading</div>
        
    )
}
export default ExamplePosts