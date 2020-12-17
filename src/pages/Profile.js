import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PostCard from '../components/PostCard'
import PostModel from '../models/post'
import UserModel from '../models/user'
import './App.scss'


const Profile = props => {
  const [posts, setPosts] = useState([])
  const [userId] = useState(props.currentUser)
  const [user, setUser] = useState([])
  const [wasDeleted, setWasDeleted] = useState(false)
  const [wasUpdated, setWasUpdated] = useState(false)

  useEffect(() => {
    fetchPosts()
    fetchUserInfo()
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [wasDeleted, wasUpdated])

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
    PostModel.delete(postId).then((data) => {
      setWasDeleted(!wasDeleted)
    })
  }

  const updatedPost = (postId, dishName, body) => {
    PostModel.update({ postId, dishName, body }).then((data) => {
          setWasUpdated(!wasUpdated)
      })
  }

  const generatePosts = () => {
    return posts.map((post, index) => (
        <Col xs={6} md={4}>
          <PostCard key={index} { ...post } deletedPost={ deletedPost } updatedPost={ updatedPost }/>
        </Col>
    ))
  }


  return (
    <div>
      <h1 id="headerName">{ user }</h1>
      <Container fluid>
        <Row>
          { posts.length ? generatePosts() : "Loading..." }
        </Row>
      </Container>
    </div>
  )
}

export default Profile