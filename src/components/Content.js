import React, { useState } from "react"
import AppFunc from "./AppFunc"
import ContentCard from "./ContentCard"
import "../css/index.css"
const Content = (props) => {

    const [clickText, setClickText] = useState("Clicked!")
    const [userData, setUserData] = useState("userdata")
    const [rowsCount, setRowsCount] = useState("");
    const [dataToFind, setDataToFind] = useState("");
    var ContentCards = []
    var numRe  = /[^\d]/

    const OnColumnCountChanged = () => {
        if(rowsCount!==0){
            if (numRe.test(rowsCount))  {
                return(
                    <div>
                        <span  style={{color:"red", fontSize:"small"}}>
                            Only Digits Required
                        </span>
                    </div>
                    )
                
            }
            else {
                if(parseInt(rowsCount) > 1000)
                {
                    alert(rowsCount);
                    return(
                        <div>
                            <span>
                                <a style={{textDecoration:"underline", color:"blue"}}href="https://www.youtube.com/watch?v=HelwL9XHvQk&ab_channel=%D0%BE%D1%80%D0%B8%D0%B3%D0%B8%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D1%87">
                                    ?????????????????clickme???????????????????
                                </a>
                            </span>
                        </div>
                    )
                }
            }
        }
    }

    const CreateContent = () => {
        for(var i = 0; i < (rowsCount <= 1000 ? rowsCount : 1000); i++){
            ContentCards.push(<ContentCard itemName="Item name item name item nameaaaaa" itemPrice="99999"></ContentCard>);
            ContentCards.push(<ContentCard itemName="Itasaem name item name item nameaaaaa" itemPrice="99999"></ContentCard>);
            ContentCards.push(<ContentCard itemName="Itasdem nameaaaaaaaaaaaaaaaaaaaaaaaaa" itemPrice="99999"></ContentCard>);
            ContentCards.push(<ContentCard itemName="Itfsdem name item name item nameaaaaa" itemPrice="99999"></ContentCard>);
        }
    }
    CreateContent();

    const FindContent = (data) => {
        return ContentCards.filter((card) => card.props.itemName.indexOf(data) >= 0);
    }

    const DrawContent = (content) => {
        var rows = []
        for(var i = 0; i < content.length; i++){
            rows.push(<div className="content-cards-container">
                        {content.slice((i)*4, (i+1)*4)}
                    </div>);
        }
        return rows
    }

    return (
        <div>
            <div className="content-block alignment-center">
                <div>
                    <label>
                        Строк
                        <input className="input" 
                            placeholder="Input data here..."
                            onChange={event => {setRowsCount(event.target.value); event.target.setAttribute('value', '119')}}>
                        </input>
                    </label>
                </div>
                {OnColumnCountChanged()}
                <div>
                    <label>
                        Поиск
                        <input className="input" 
                            placeholder="Input data here..."
                            onChange={event => {setDataToFind(event.target.value)}}>
                        </input>
                        
                    </label>
                    <button className="button">
                        Click me
                    </button>
                </div>

                {dataToFind.length == 0? 
                DrawContent(ContentCards)
                : DrawContent(FindContent(dataToFind))}
            </div>
        </div>
    )
}


export default Content