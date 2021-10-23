import React from 'react'
import './Pricebox.css'
const Pricebox = () => {
    return (
        <div className="priceBox">
            <div className="priceData">
                <p className="priceTitle">Reguler Price</p>
                <p className="price">$2000</p>
            </div>
            <div className="priceUpgrade">
                <input checked type="checkbox" name="" value=""/>
                <p>06 months support from Mubasshir</p>
            </div>
            <div className="priceUpgrade">
                <input type="checkbox" name="" value=""/>
                <p>Extend support to 12 months</p>
                <p>$500</p>
            </div>
            <div className="pricboxBtn">
                <button className="btn">Buy Now</button>
            </div>
        </div>
    )
}

export default Pricebox
