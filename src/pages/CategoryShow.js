import React, { useEffect, useState } from 'react'
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'


const CategoryShow = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchCategoryPosts()
    // }, [])
    })

    const fetchCategoryPosts = () => {
        PostModel.show(props.location.state).then((data) => {
            setPosts(data.posts)
        })
    }

    const generateCategoryPosts = () => {
        return posts.map((post, index) => (
            <div key={index}>
                <ResultsCard { ...post }/>
            </div>
        ))
    }


    return (
        <div>
            <h1>This is your CategoryShow Page</h1>
            { posts.length ? generateCategoryPosts() : "Loading..." }
        </div>
    );
}

export default CategoryShow;