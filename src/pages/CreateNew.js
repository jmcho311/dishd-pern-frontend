import React, { useState } from 'react';
import PostModel from '../models/post'
import './App.scss'

const CreateNew = (props) => {
    const [userId] = useState(props.currentUser)
    const [photo, setPhoto] = useState("")
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

    const checkUploadResult = (resultEvent) => {
        // console.log(resultEvent)
        // console.log(resultEvent.info.secure_url)
        if (resultEvent.event === 'success') {
            // console.log(userId)
            // console.log(resultEvent.info.secure_url)
            let img_url = resultEvent.info.secure_url
            setPhoto(img_url)
        }
    }

    const showWidget = (e) => {
        e.preventDefault()
        widget.open()
    }

    let widget = window.cloudinary.createUploadWidget({
        cloudName: "jmcho311",
        uploadPreset: "vyd0gpet",
        folder: 'widgetUpload'},
        (error, result) => { checkUploadResult(result) }) 

    return (
        <div className="create">
            <h1 className="createHeader">Create a NEW POST</h1>
            <form className="createForm" onSubmit={ handleSubmit }>
                <label className="createLabel">LOCATION </label>
                <input
                    className="createInput"
                    name="locationName"
                    placeholder="Location"
                    type="text"
                    onChange={ onNewLocation }
                    value={ locationName }
                />
                <br/>
                <label className="createLabel">CITY </label>
                <input
                    className="cityInput"
                    name="city"
                    placeholder="City"
                    type="text"
                    onChange={ onNewCity }
                    value={ city }
                />
                <label className="createLabel">STATE </label>
                <input
                    className="stateInput"
                    name="state"
                    placeholder="State"
                    type="text"
                    onChange={ onNewState }
                    value={ state }
                />
                <br/>
                <label className="createLabel">CATEGORY </label>
                <input
                    className="createInput"
                    name="category"
                    placeholder="Category"
                    type="text"
                    onChange={ onNewCategory }
                    value={ category }
                />
                <br/>
                <label className="createLabel">DISH NAME </label>
                <input
                    className="createInput"
                    name="dishName"
                    placeholder="Dish"
                    type="text"
                    onChange={ onNewDish }
                    value={ dishName }
                />
                <br/>
                <label className="createLabel">CAPTION </label>
                <input
                    className="commentInput"
                    name="body"
                    placeholder="Caption"
                    type="text"
                    onChange={ onNewBody }
                    value={ body }
                />
                <br/>
                <label className="createLabel">UPLOAD PHOTO</label>
                <div id='photo-form-container'>
                    <button className="newPostButton" onClick={ showWidget }>Upload Photo</button>
                </div>
                <br/>
                <label className="createLabel">PHOTO URL </label>
                <input
                    className="createInput"
                    name="photoUrl"
                    placeholder=""
                    type="text"
                    value={ photo }
                />
                <br/>
                <button className="newPostButton">submit</button>
            </form>
        </div>
    )
}

export default CreateNew;
