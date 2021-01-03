import React from 'react'  
import './Game.css'
const AssassinsCreedPage = (props) => {
    const data = props.history.location.state.data
    return(
        <div className="container">
           <div className="flex ac jcsb menu">
               <img src={data.posterLink} alt={data.title} />
               <div className="flex-left">
                   <h2>{data.title}</h2>
                   <p>{data.description}</p>
                   <h3>Platforms</h3>
                   <div className="grid-4" style={{gridGap:"0px 10px"}}>
                       {
                           data.platforms.map((platform, index) => (
                               <p className="platform" key={index}>{platform}</p>
                           ))
                       }
                   </div>
                   <p>Developed By <span style={{color:"black"}}>{data.developer}</span></p>
               </div>
           </div>
        </div>
    )
}
export default AssassinsCreedPage