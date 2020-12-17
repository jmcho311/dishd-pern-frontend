import React, { useState } from 'react'
import './PostCard.scss'
import '../pages/App.scss'

function PostCard(props) {
    const [dishName, setDishName] = useState("")
    const [body, setBody] = useState("")

    const onDishChange = (e) => { setDishName(e.target.value) }
    const onBodyChange = (e) => { setBody(e.target.value) }

    // console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updatedPost(props.id, dishName, body)
            setDishName("")   
            setBody("")   
    }

    return (
        <div className="postCard">
            <div>
                <img className="postImage" src={ props.photo } alt={ dishName }/>
            </div>
            <div className="postContent">
                <h3 id="location">{ props.locationName }</h3>
                <h5 id="cityState">{ props.city }, { props.state }</h5>
                <h2 id="dish">{ props.dishName }</h2>
                <p id="body">{ props.body }</p>
                <p id="date">{ props.createdAt }</p> 
                <form className="editForm" onSubmit={ handleSubmit }>
                    <input
                        className="editInput" 
                        name="dishName"
                        placeholder="Dish Name"
                        type="string"
                        onChange={ onDishChange }
                        value={ dishName }
                    />
                    <label className="editLabel">Edit DISH NAME </label>
                    <br/>
                    <input
                        className="editInput" 
                        name="body"
                        placeholder="Caption"
                        type="text"
                        onChange={ onBodyChange }
                        value={ body }
                    />
                    <label className="editLabel">Edit CAPTION </label>
                    <br/>
                    <button className="profileButton">EDIT POST</button>
                    <br/>
                    <button className="profileButton" onClick={ () => props.deletedPost(props.id) } >
                        DELETE POST
                    </button>
                </form>
            </div>
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