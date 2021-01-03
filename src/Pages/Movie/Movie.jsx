import React from 'react'   
import './Movie.css'
const AssassinsCreedPage = (props) => {
    const data = props.history.location.state.data
    return(
        <div className="container">
           <div className="flex ac jcsb menu">
               <img src={data.posterLink} alt={data.title} className="movie-poster"/>
               <div className="flex-left">
                   <h2>{data.title}</h2>
                   <p>{data.description}</p>
                   <p>Directed By <span style={{color:"black"}}>{data.director}</span></p>
                   <p>Budget <span style={{color:"black"}}>{data.budget}</span></p>
                   <p>Revenue  <span style={{color:"black"}}>{data.revenue}</span></p>
                   <h3>Cast</h3>
                   <div className="grid-6" style={{gridGap:"0px 10px"}}>
                       {
                           data.stars.map((star, index) => (
                               <p className="cast" key={index}>{star}</p>
                           ))
                       }
                   </div>
               </div>
           </div>
        </div>
    )
}
export default AssassinsCreedPage