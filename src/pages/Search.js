import React, { useState } from 'react';

const Search = (props) => {
    const [category, setCategory] = useState("")
    // const [locationName, setLocationName] = useState("")
    // const [dishName, setDishName] = useState("")

    // console.log(props)  // only gives currentUser ID

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
            <form>
                <input 
                    type="text"
                    placeholder="RESTAURANTS"
                    // onChange={  }
                    // value={  }
                />
                <button>Search by Restaurant Posts</button>
            </form>
            <form>
                <input 
                    type="text"
                    placeholder="DISH NAME"
                    // onChange={  }
                    // value={  }
                />
                <button>Search by Dish Posts</button>
            </form>
        </div>
    );
}

export default Search;