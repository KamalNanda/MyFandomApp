import React from 'react'
import Thumbnail from '../thumbnail/thumbnail' 
import {useHistory} from 'react-router-dom'
const Menu = (props) => {
    const history = useHistory()
    return(
            <div className="grid-4 menu">
                {
                    props.data.map((data,i) => {
                        return(
                            <div style={{cursor:"pointer"}} onClick={() => history.push({pathname:`/${props.link}/${data.title}`, state:{data:data} })}>
                                <Thumbnail data={data} key={i} /> 
                            </div>
                        )
                    })
                }
            </div>
       
    )
}

export default Menu