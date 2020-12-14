import React, { useState } from 'react';

const Search = (props) => {
    const [category, setCategory] = useState("")
    const [locationName, setLocationName] = useState("")
    const [dishName, setDishName] = useState("")

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

    return (
        <div>
            <h1>This is your Search Form Page</h1>
            <form onSubmit={ searchCategory }>
                <input 
                    type="text"
                    placeholder="CATEGORY"
                    onChange={ categoryChange }
                    value={ category }
                />
                <button>Search by Category Posts</button>
            </form>
            <form onSubmit={ searchLocation }>
                <input 
                    type="text"
                    placeholder="RESTAURANTS"
                    onChange={ locationChange }
                    value={ locationName }
                />
                <button>Search by Restaurant Posts</button>
            </form>
            <form onSubmit={ searchDish }>
                <input 
                    type="text"
                    placeholder="DISH NAME"
                    onChange={ dishChange }
                    value={ dishName }
                />
                <button>Search by Dish Posts</button>
            </form>
        </div>
    );
}

export default Search;
