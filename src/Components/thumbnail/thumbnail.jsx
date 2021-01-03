import React from 'react'
import './thumbnail.css'
const Thumbnail = ({data}) => {

    return(
        <div className="thumbnail">
            <img src={data.posterLink} alt={data.title} />
            <h2>{data.title}</h2>
        </div> 
    )
}

export default Thumbnail