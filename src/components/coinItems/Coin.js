import React from "react";
import "./Coin.css";
const Coin = ({name,price,symbol,marketcap,volume,image,pricechange})=>{
    return (
        <div className="cryptoCoin">
            
            <img src={image} alt={`${name}`} className="coinLogo"></img>
            <div className="coinNameWrap">
                <h1 className="coinName">{name}</h1>
                <p className="coinSymbol">{symbol}</p>
            </div>
            <p className="coinPrice">{price.toLocaleString()} INR</p>
            <p className="coinMarketcap">MarketCap : {marketcap.toLocaleString()} INR</p>
            <p className="coinVolume">Volume(24H) : {volume.toLocaleString()} </p>   
            {pricechange < 0 ? (
                <div className="priceContainerDown">
                    <i className="fas fa-angle-down fa-2x"></i>
                    <p className="pricechange">{pricechange.toFixed(2)}%</p>
                </div>
            ) : (
                <div className="priceContainerUp">
                    <i className="fas fa-angle-up fa-2x"></i>
                    <p className="pricechange">{pricechange.toFixed(2)}%</p>
                </div>                
            )}   
        </div>

    )
}

export default Coin 