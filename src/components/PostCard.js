import React, { useState } from 'react'

function PostCard(props) {
    // const [postId] = useState(props.id)
    // const [photo] = useState(props.photo)
    // const [locationName] = useState(props.locationName)
    // const [city] = useState(props.city)
    // const [state] = useState(props.state)
    // const [category] = useState(props.category)
    const [dishName, setDishName] = useState("")
    const [body, setBody] = useState("")

    const onDishChange = (e) => { setDishName(e.target.value) }
    const onBodyChange = (e) => { setBody(e.target.value) }

    console.log(props)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updatedPost(props.id, dishName, body)
        // let postData = {
        //     postId: postId,
        //     dishName: dishName,
        //     body: body
        // }
        // PostModel.update({ postId, dishName, body }).then((data) => {
        // // PostModel.update({ postData }).then((data) => {
        //     // console.log(data)
        //     props.fetchPosts()
        //     // setDishName({ dishName: '' })  // this prints [object Object] 
            setDishName("")   
        //     // setBody({ body: '' })   // this prints [object Object] 
            setBody("")   
        // })
    }

    return (
        <div>
            <div className="image">
                <img src={ props.photo } alt={ dishName }/>
            </div>
            <h3>{ props.locationName }</h3>
            <h5>{ props.city }, { props.state }</h5>
            <h2>{ props.dishName }</h2>
            <p>{ props.body }</p>
            <p>{ props.createdAt }</p> 
            <form onSubmit={ handleSubmit }>
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
                <button>Submit</button>
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