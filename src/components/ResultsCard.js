import React from 'react'
import './PostCard.scss'
import '../pages/App.scss'

function ResultsCard(props) {

    return (
        <div className="postCard">
            <div>
                <img className="postImage" src={ props.photo } alt={ props.dishName }/>
            </div>
            <h3 id="location">{ props.locationName }</h3>
            <h5 id="cityState">{ props.city }, { props.state }</h5>
            <h2 id="dish">{ props.dishName }</h2>
            <p id="body">{ props.body }</p>
            <p id="date">{ props.createdAt }</p> 
        </div>
    )
}

export default ResultsCard
