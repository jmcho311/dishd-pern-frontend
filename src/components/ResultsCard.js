import React from 'react'

function ResultsCard(props) {

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
        </div>
    )
}

export default ResultsCard
