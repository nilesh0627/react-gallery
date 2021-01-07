import React from 'react'
import Image from './image'
import './image.css'
function ImageList({images}){
    console.log(images)
    return (
        <div className="container">
            <h2>Results</h2>
            <div className="image__container">
            {images.map((image)=>{
                return <Image key={image.id} image={image}/>
            })}
        </div>
        </div>
        
    )
}

export default ImageList


