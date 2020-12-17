import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'
import './App.scss'


const LocationShow = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchLocationPosts()
    }, [])
    // })

    const fetchLocationPosts = () => {
        PostModel.showLocation(props.location.state).then((data) => {
            setPosts(data.posts)
        })
    }

    const generateLocationPosts = () => {
        return posts.map((post, index) => (
            <Col xs={6} md={4}>
                <ResultsCard key={index} { ...post }/>
            </Col>
        ))
    }


    return (
        <div>
            <h1 id="name">SEARCH RESULTS for: '{ props.location.state }'</h1>
            <Container fluid>
                <Row>
                    { posts.length ? generateLocationPosts() : "Loading..." }
                </Row>
            </Container>
        </div>
    );
}

export default LocationShow;
