import React, { useEffect, useState } from 'react'
import ResultsCard from '../components/ResultsCard'
import PostModel from '../models/post'


const CategoryShow = (props) => {
    const [categoryPosts, setCategoryPosts] = useState([])
    // const [locationPosts, setLocationPosts] = useState([])

    useEffect(() => {
        fetchCategoryPosts()
        // fetchLocationPosts()
    }, [])

    console.log(props)

    const fetchCategoryPosts = () => {
        let category = (props.location.state)
        PostModel.show(category).then((data) => {
            setCategoryPosts(data.category)
        })
    }

    // const fetchLocationPosts = () => {
    //     PostModel.showLocation().then((data) => {
    //         setLocationPosts(data.posts)
    //     })
    // }

    const generateCategoryPosts = () => {
        return categoryPosts.map((post, index) => (
            <div key={index}>
                <ResultsCard { ...post }/>
            </div>
        ))
    }


    return (
        <div>
            <h1>This is your CategoryShow Page</h1>
            { categoryPosts.length ? generateCategoryPosts() : "Loading..." }
            {/* { generateCategoryPosts() } */}
        </div>
    );
}

export default CategoryShow;