import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import PostModel from '../models/post'


const Profile = props => {
  const [posts, setPosts] = useState({})
  const [userId] = useState(props.currentUser)

  useEffect(() => {
    fetchPosts()
  }, [posts])

  const fetchPosts = () => {
    PostModel.showPost(userId).then((data) => {
      setPosts(data.posts)
      // console.log(data)
      // console.log(data.posts)
    })
  }

  const generatePosts = () => {
    return posts.map((post, index) => (
      <div key={index}>
        <PostCard { ...post }/>
      </div>
    ))
  }
  
  console.log(props.currentUser)
  console.log(posts)
  
  return (
    <div>
      <h1>Profile of user with ID { props.currentUser }</h1>
      {posts.length ? generatePosts() : "Loading..."}
    </div>
  )
}

export default Profile