import React, { useEffect, useState } from 'react';
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
            <div key={index}>
                <ResultsCard { ...post }/>
            </div>
        ))
    }

    return (
        <div>
            <h1>This is your LocationShow Page</h1>
            { posts.length ? generateLocationPosts() : "Loading..." }
        </div>
    );
}

export default LocationShow;
