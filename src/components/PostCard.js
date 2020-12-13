import React, { useState } from 'react'
import PostModel from '../models/post'

function PostCard(props) {
    const [dishName, setDishName] = useState("")
    const [body, setBody] = useState("")

    const onDishChange = (e) => { setDishName(e.target.value) }
    const onBodyChange = (e) => { setBody(e.target.value) }

    // console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault()
        PostModel.update({ dishName, body }).then((data) => {
            props.history.push('/profile')
        })
    }

    return (
        <div>
            <div className="image">
                <img src={ props.photo } alt={ props.dishName }/>
            </div>
            <h3>{ props.locationName }</h3>
            <h5>{ props.city }, { props.state }</h5>
            <h2>{ props.dishName }</h2>
            <p>{ props.body }</p>
            <p>{ props.createdAt }</p> 
            <form onSubmit={ handleSubmit }>
                {/* onSubmit={ (e) => { 
                    e.preventDefault()
                    dishName(props.dishName)
                    body(props.body)
                } }> */}
                <input 
                    name="dishName"
                    placeholder="Dish Name"
                    type="string"
                    onChange={ onDishChange }
                    value={ dishName }
                />
                <input 
                    name="body"
                    placeholder="Comment"
                    type="text"
                    onChange={ onBodyChange }
                    value={ body }
                />
                <button className="submitBtn">Submit</button>
                {/* <button onClick={ () => props.updatedPost(props.id) }>EDIT</button> */}
            </form>
            <button onClick={ () => props.deletedPost(props.id) } >
                Delete
            </button>
        </div>
    )
}

export default PostCard


// userId: DataTypes.INTEGER,
// photo: DataTypes.STRING,
// locationName: DataTypes.STRING,
// city: DataTypes.STRING,
// state: DataTypes.STRING,
// category: DataTypes.STRING,
// dishName: DataTypes.STRING,
// body: DataTypes.TEXT