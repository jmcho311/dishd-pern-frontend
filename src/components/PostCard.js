import React from 'react'
import PostModel from '../models/post'

function PostCard(props) {
    
    const deletePost = () => {
        PostModel.delete(props.id)
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
            <button className="link" onClick={ deletePost } >
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