import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './Faq.css'

const Faq = ({question,answer}) =>{
    const [showInfo, setShowInfo] = useState(false)
    return (
        <div>
        <div className="faqContentContainer">
            <div className="questionContainer">
            <h4>{question}</h4>
            <button className="btn"
             onClick={()=>setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
            </div>

           {showInfo && <p>{answer}</p>}
                            
       </div>
        </div>
    )
}
export default Faq