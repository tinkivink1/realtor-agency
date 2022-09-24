import React, { useState } from "react"
import AppFunc from "./AppFunc"
import ContentCard from "./ContentCard"
import { Animated } from "react-animated-css"
import "../css/index.css"
class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            clickText: "Clicked!",
            userData: ""
        }

        this.onClickAction = this.onClickAction.bind(this)
    }

    render() {
        return (
            <div>
                
                <div className="content-block alignment-center">
                    <label>
                        Поиск
                        <input className="input" 
                            placeholder="Input data here..."
                            onChange={event => this.setState({userData: event.target.value})}>
                        </input>
                    </label>
                    <button className="button" onClick={() => {this.onClickAction()}}>
                        Click me
                    </button>
                    <div className="content-cards-container">
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item nameaaaaaaaaaaaaaaaaaaaa" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                    </div>
                    <div className="content-cards-container">
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                    </div>
                    <div className="content-cards-container">
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                        <ContentCard itemName="Item name item name item name" itemPrice="99999"></ContentCard>
                    </div>
                </div>
                
                
            </div>
        )
    }



    onClickAction(){
        this.setState({clickText: "Changed! "})
        console.log(this.state.clickText)
    }
}


export default Content