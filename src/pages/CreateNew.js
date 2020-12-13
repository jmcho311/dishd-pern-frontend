import React, { useState } from 'react';
import PostModel from '../models/post'
// import UserModel from '../models/user'

const CreateNew = (props) => {
    const [userId] = useState(props.currentUser)
    const [photo] = useState(null)
    const [locationName, setLocationName] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [category, setCategory] = useState("")
    const [dishName, setDishName] = useState("")
    const [body, setBody] = useState("")
    
    const onNewLocation = (e) => { setLocationName(e.target.value) }
    const onNewCity = (e) => { setCity(e.target.value) }
    const onNewState = (e) => { setState(e.target.value) }
    const onNewCategory = (e) => { setCategory(e.target.value) }
    const onNewDish = (e) => { setDishName(e.target.value) }
    const onNewBody = (e) => { setBody(e.target.value) }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        PostModel.create({ userId, photo, locationName, city, state, category, dishName, body }).then((data) => {
            console.log('Successful post', data)
            props.history.push('/profile')
        })
    }


    return (
        <div>
            <h1>Create a New Post.</h1>
            <form onSubmit={ handleSubmit }>
                <label>LOCATION </label>
                <input
                    name="locationName"
                    placeholder="Location"
                    type="text"
                    onChange={ onNewLocation }
                    value={ locationName }
                />
                <br/>
                <label>CITY </label>
                <input
                    name="city"
                    placeholder="City"
                    type="text"
                    onChange={ onNewCity }
                    value={ city }
                />
                <label>STATE </label>
                <input
                    name="state"
                    placeholder="State"
                    type="text"
                    onChange={ onNewState }
                    value={ state }
                />
                <br/>
                <label>CATEGORY </label>
                <input
                    name="category"
                    placeholder="Category"
                    type="text"
                    onChange={ onNewCategory }
                    value={ category }
                />
                <label>DISH NAME </label>
                <input
                    name="dishName"
                    placeholder="Dish"
                    type="text"
                    onChange={ onNewDish }
                    value={ dishName }
                />
                <br/>
                <label>COMMENT </label>
                <input
                    name="body"
                    placeholder="Comment"
                    type="text"
                    onChange={ onNewBody }
                    value={ body }
                />
                <br/>
                <button className="submitBtn">Submit</button>
            </form>
        </div>
    )
}

export default CreateNew;