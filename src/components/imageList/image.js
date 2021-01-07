import React from 'react'
import './image.css'
function Image({image}){
    return (
        <div className="image">
            <img src={image.urls.thumb} alt={image.alt_description}/>
        </div>
    )
}

export default Image