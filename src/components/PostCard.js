import React from 'react'
// import PostModel from '../models/post'

function PostCard(props) {

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
            <form action="">
            {/* <form onSubmit={ onSubmit }> */}
                <input 
                    name="dishName"
                    placeholder="Dish Name"
                    type="string"
                    // onChange={ onDishChange }
                    // onChange={ onPostChange }
                    // value={ setDishName }
                    // value={ post }
                />
                <input 
                    name="body"
                    placeholder="Comment"
                    type="text"
                    // onChange={ onBodyChange }
                    // onChange={ onPostChange }
                    // value={ setBody }
                    // value={ post }
                />
                <button>EDIT</button>
            </form>
            <button className="link" onClick={() => props.deletedPost(props.id) } >
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