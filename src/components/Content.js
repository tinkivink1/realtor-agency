import React, { useState } from "react"
import Custom from "./Custom"
import ContentCard from "./ContentCard"

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
                    <div  className=".content-cards-container">
                        <ContentCard itemName="Глаз на фоне радужном!"></ContentCard>
                    </div>

                </div>

                <label>
                    Ввод данных
                    <input className="input" placeholder="Input data here..."
                    onChange={event => this.setState({userData: event.target.value})}>
                    </input>
                </label>
                <button className="button" onClick={() => {this.onClickAction()}}>
                    Click me
                </button>
                <Custom/>
            </div>
        )
    }

    onClickAction(){
        this.setState({clickText: "Changed! "})
        console.log(this.state.clickText)
    }
}


export default Content