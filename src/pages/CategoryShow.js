import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'
import './App.scss'


const CategoryShow = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchCategoryPosts()
    }, [])

    const fetchCategoryPosts = () => {
        PostModel.show(props.location.state).then((data) => {
            setPosts(data.posts)
        })
    }

    const generateCategoryPosts = () => {
        return posts.map((post, index) => (
            <Col xs={6} md={4}>
                <ResultsCard key={index} { ...post }/>
            </Col>
        ))
    }


    return (
        <div>
            <h1 id="name">This is your CategoryShow Page</h1>
            <Container fluid>
                <Row>
                    { posts.length ? generateCategoryPosts() : "Loading..." }
                </Row>
            </Container>
        </div>
    )
}

export default CategoryShow;