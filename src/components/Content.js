import React, { useState } from "react"
import AppFunc from "./AppFunc"
import ContentCard from "./ContentCard"
import "../css/index.css"
const Content = (props) => {

    const [clickText, setClickText] = useState("Clicked!")
    const [userData, setUserData] = useState("userdata")
    const [rowsCount, setRowsCount] = useState("aaa");
    
    var numRe  = /\D/
    const OnColumnCountChanged = () => {
        console.log(numRe.test(rowsCount))
        if (numRe.test(rowsCount))  {
            return(
            <div>
                    ok
            </div>
            )
        }
        else{
            return(
                <div>
                    Only Digits Required
                </div>
            )
        }
    }
    return (
        <div>
            <div className="content-block alignment-center">
                <div>
                    <label>
                        Строк
                        <input className="input" 
                            placeholder="Input data here..."
                            onChange={event => {setRowsCount(event.target.value==0); OnColumnCountChanged()}}>
                        </input>
                    </label>
                    <OnColumnCountChanged/>
                </div>
                <div>
                    <label>
                        Поиск
                        <input className="input" 
                            placeholder="Input data here..."
                            onChange={event => this.setState({userData: event.target.value})}>
                        </input>
                        
                    </label>
                    <button className="button">
                        Click me
                    </button>
                </div>
                

                
                <div className="content-cards-container">
                    <ContentCard itemName="Item name item name item nameaaaaa" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Itasaem name item name item nameaaaaa" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item nameaaaaaaaaaaaaaaaaaaaaaaaaa" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item name item name item nameaaaaa" itemPrice="99999"></ContentCard>
                </div>
                <div className="content-cards-container">
                    <ContentCard itemName="Item name item name item nameaaa" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Iasdatems name item name item namesadasd" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item name item name item adsadsadname" itemPrice="99999"></ContentCard>
                </div>
                <div className="content-cards-container">
                    <ContentCard itemName="Itemasdasd name item name item name" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item name item name itemasd name" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Item name item name itesadsadm name" itemPrice="99999"></ContentCard>
                    <ContentCard itemName="Itasdem name item name item name" itemPrice="99999"></ContentCard>
                </div>
            </div>
        </div>
    )
}


export default Content