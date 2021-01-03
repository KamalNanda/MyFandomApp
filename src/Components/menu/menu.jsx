import React from 'react'
import './menu.css'
import Thumbnail from '../thumbnail/thumbnail'
import {Link} from 'react-router-dom' 
const Menu = ({data}) => { 
    return(
            <div className="grid-4 menu">
                {
                    data.map((data,i) => {
                        return(
                            <Link to={data.link}>
                                <Thumbnail data={data} key={i} /> 
                            </Link>
                        )
                    })
                }
            </div>
       
    )
}

export default Menu