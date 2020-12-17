import React, { useState } from 'react'
// import PostModel from '../models/post'
import './App.scss'


const Search = (props) => {
    const [category, setCategory] = useState("")
    const [locationName, setLocationName] = useState("")
    const [dishName, setDishName] = useState("")
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    // const fetchPosts = () => {
    //     PostModel.all().then((data) => {
    //         setPosts(data.posts)
    //     })
    // }

    const searchCategory = (e) => {
        e.preventDefault()
        props.history.push({
            pathname: '/category',
            state: category
        })
    }

    const categoryChange = (e) => {
        setCategory(e.target.value)
    }

    const searchLocation = (e) => {
        e.preventDefault()
        props.history.push({
            pathname: '/location',
            state: locationName
        })
    }

    const locationChange = (e) => {
        setLocationName(e.target.value)
    }

    const searchDish = (e) => {
        e.preventDefault()
        props.history.push({
            pathname: '/dish',
            state: dishName
        })
    }

    const dishChange = (e) => {
        setDishName(e.target.value)
    }

    // const generateCategoryList = () => {
    //     return posts.map((post, index) => (
    //         <option key={index}>{ post.category }</option>
    //     ))
    // }

    return (
        <div className="search">
            <div className="searchForm">
                <form onSubmit={ searchCategory }>
                    <input 
                        className="input"
                        type="text"
                        placeholder="category"
                        onChange={ categoryChange }
                        value={ category }
                    />
                    {/* <select>
                        onChange={ categoryChange }
                        value={ category }
                        id="selectBar"
                        { generateCategoryList }
                    </select> */}
                    <button className="formButton">Search by CATEGORY</button>
                </form>
                <form onSubmit={ searchLocation }>
                    <input 
                        className="input"
                        type="text"
                        placeholder="restaurant"
                        onChange={ locationChange }
                        value={ locationName }
                    />
                    <button className="formButton">Search by RESTAURANT</button>
                </form>
                <form onSubmit={ searchDish }>
                    <input 
                        className="input"
                        type="text"
                        placeholder="dish name"
                        onChange={ dishChange }
                        value={ dishName }
                    />
                    <button className="formButton">Search by DISH</button>
                </form>
            </div>
        </div>
    )
}

export default Search
