import React, { useState } from "react"
import AppFunc from "./AppFunc"
import ContentCard from "./ContentCard"
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
                <h2> 
                    {this.state.userData}
                </h2>
                <div className="content-block alignment-center">
                        <ContentCard itemName="Глаз на фоне радужном!"></ContentCard>
                        <ContentCard itemName="Но глаз не так уж прост!"></ContentCard>
                        <ContentCard itemName="Летает в воздухе и смотрит!"></ContentCard>
                        <ContentCard itemName="Летает в воздухе и смотрит!"></ContentCard>
                <label>
                    Ввод данных
                    <input className="input" 
                        placeholder="Input data here..."
                        onChange={event => this.setState({userData: event.target.value})}>
                    </input>
                </label>
                <button className="button" onClick={() => {this.onClickAction()}}>
                    Click me
                </button>
                
                <AppFunc/>
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