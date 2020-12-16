import React, { useEffect, useState } from 'react';
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'
import './App.scss'


const DishShow = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchDishPosts()
    // }, [])
    })

    const fetchDishPosts = () => {
        PostModel.showDish(props.location.state).then((data) => {
            setPosts(data.posts)
        })
    }

    const generateDishPosts = () => {
        return posts.map((post, index) => (
            <div key={ index }>
                <ResultsCard { ...post }/>
            </div>
        ))
    }


    return (
        <div>
            <h1>This is your Dish Show page</h1>
            { posts.length ? generateDishPosts() : "Loading..." }
        </div>
    );
}

export default DishShow;
