import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import PostModel from '../models/post'
import UserModel from '../models/user'


const Profile = props => {
  const [posts, setPosts] = useState([])
  const [userId] = useState(props.currentUser)
  const [user, setUser] = useState([])
  const [wasDeleted, setWasDeleted] = useState(false)

  useEffect(() => {
    fetchPosts()
    fetchUserInfo()
  }, [])

  useEffect(() => {
    // console.log('ran this thing')
    fetchPosts()
  }, [wasDeleted])

  const fetchPosts = () => {
    PostModel.showPost(userId).then((data) => {
      setPosts(data.posts)
    })
  }

  const fetchUserInfo = () => {
    UserModel.index().then((data) => {
      setUser(data.user[0].name)
    })
  }

  const deletedPost = (postId) => {
    // console.log(postId)
    PostModel.delete(postId).then((data) => {
      setWasDeleted(!wasDeleted)
    })
  }

  const generatePosts = () => {
    return posts.map((post, index) => (
      <div key={index}>
        <PostCard { ...post } deletedPost={ deletedPost } fetchPosts={ fetchPosts }/>
      </div>
    ))
  }
  

  return (
    <div>
      <h1>Profile Page for { user }</h1>
      { posts.length ? generatePosts() : "Loading..." }
    </div>
  )
}

export default Profile