import React from "react"
import img from "../image/temp.png"
class ContentCard extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
        <div className="content-card">
            <img src={img} alt="kekekeek" style={{width: 200}}/>
            <div  className="content-card-content">
                <p style={{}}>
                    {this.props.itemName}
                </p>
            </div>
        </div>
        );
    }
}

export default ContentCard