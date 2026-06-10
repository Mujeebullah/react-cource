import React from 'react'
import axios from 'axios'

const App = () => {

  const getPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')     
    const data = await response.json()
    console.log(data)
  }

  const addPost = async () => {
    const postData = {
      userId: 1,
      title: "Esse voluptate fugiat occaecat consequat eu dolor.",
      body: "Labore cupidatat fugiat esse est. Et eu ex sit aliquip sit culpa cupidatat. Do commodo culpa dolore labore. Consectetur elit quis voluptate dolor occaecat quis labore Lorem eu. Duis exercitation cupidatat velit ullamco fugiat minim laboris veniam irure. Ullamco pariatur labore aliqua deserunt sit aliquip aute excepteur cupidatat aliqua do voluptate eiusmod. Veniam quis voluptate qui nisi nisi eiusmod dolor aute ad."
    }
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8', // Explicity inform server data is in json format
      },
      body: JSON.stringify(postData)
    })
    const data = await respose.json();
    console.log(data);
  }

  const updatePost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
      method: 'PUT',      
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        id: 1,
        userId: 1,
        title: 'New Update on resouce id - 1',
        body: 'Ad non ex cillum aliquip. Aute aliqua pariatur id commodo ullamco eu nisi commodo excepteur do do enim. Sint nostrud eiusmod ea mollit cillum Lorem amet. Quis laborum nisi irure laboris veniam ullamco in pariatur nisi cupidatat quis.'
      })
    })
    const updateData = await response.json();
    console.log(updateData)
    setTimeout(() => {
      getPost()
    }, 500);
  }



  return (
    <div>
      <h1>Api Call</h1>
      <button onClick={() => getPost()}>Get Post</button>
      <button onClick={() => addPost()}>Add Post</button>
      <button onClick={() => updatePost()}>Update Post</button>
    </div>
  )
}

export default App