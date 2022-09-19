import React from "react"
import img from "../image/temp.png"

const ContentCard = (props) => {

    return(
        <div className="content-card">
            <img src={img} alt="kekekeek" style={{width: 200}}/>
            <div  className="content-card-content">
                <p>
                    {props.itemName}
                </p>
            </div>
        </div>
    );
}

export default ContentCard