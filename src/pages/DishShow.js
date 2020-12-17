import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'
import './App.scss'


const DishShow = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchDishPosts()
    }, [])

    const fetchDishPosts = () => {
        PostModel.showDish(props.location.state).then((data) => {
            setPosts(data.posts)
        })
    }

    const generateDishPosts = () => {
        return posts.map((post, index) => (
            <Col xs={6} md={4}>
                <ResultsCard key={ index } { ...post }/>
            </Col>
        ))
    }


    return (
        <div>
            <h1 id="name">SEARCH RESULTS for: '{ props.location.state }'</h1>
            <Container fluid>
                <Row>
                    { posts.length ? generateDishPosts() : "Loading..." }
                </Row>
            </Container>
        </div>
    )
}

export default DishShow;
