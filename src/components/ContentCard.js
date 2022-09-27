import React from "react"
import img from "../image/temp.png"
import Heart from "./Heart";

var ContentCard = (props) => {

    var itemName = props.itemName;
    var itemPrice = props.itemPrice;

    var getName = function() {
        return  itemName;
    }

    return(
        <div className="content-card">
            <img src={img} alt="kekekek" className="content-card-image"/>
            <div  className="content-card-content">
                <div className="content-card-header">
                    <p className="content-card-name">
                        {itemName}
                    </p>
                    <div>
                        <Heart/>
                    </div>
                </div>
                <p className="content-card-price">
                    {itemPrice}₽
                </p>
            </div>
        </div>
    );
}


// class ContentCard extends React.Component {
//     itemName = "";
//     itemPrice = 0;
//     constructor (props){
//         super(props)
//         this.state = {
//             itemName: props.itemName,
//             itemPrice: props.itemPrice,
            
//         }

        
//     }
//     // getName() {
//     //     return  this.itemName;
//     // }
//     // getState() {
//     //     return this.state;
//     // }
//     render() {
//         return(
//             <div className="content-card">
//                 <img src={img} alt="kekekek" className="content-card-image"/>
//                 <div  className="content-card-content">
//                     <div className="content-card-header">
//                         <p className="content-card-name">
//                             {this.state.itemName}
//                         </p>
//                         <div>
//                             <Heart/>
//                         </div>
//                     </div>
//                     <p className="content-card-price">
//                         {this.state.itemPrice}₽
//                     </p>
//                 </div>
//             </div>
//         );
//     }
// }
export default ContentCard