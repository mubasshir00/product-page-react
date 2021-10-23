import React from 'react'
import './Description.css'
const Description = ({title, description}) => {
    return (
        <div className="descriptionWrapper">
            <h2>{title}</h2>
            <hr/>
            <div className="desContent">
            {
                description.map((para)=>{
                    const {item} = para;
                    return(
                       <>
                        <p>{item}</p>
                        <br/>
                       </>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Description
