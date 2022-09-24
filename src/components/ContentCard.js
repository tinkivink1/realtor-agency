import React from "react"
import img from "../image/temp.png"
import Heart from "./Heart";
const ContentCard = (props) => {

    return(
        <div className="content-card">
            <img src={img} alt="kekekek" className="content-card-image"/>
            <div  className="content-card-content">
                <div className="content-card-header">
                    <p className="content-card-name">
                        {props.itemName}
                    </p>
                    <div>
                        <Heart animationIn="bounceInLeft" animationOut="fadeIn" isVisible={true}/>
                    </div>
                </div>
                <p className="content-card-price">
                    {props.itemPrice}₽
                </p>
            </div>
        </div>
    );
}

export default ContentCard