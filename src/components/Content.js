import React, { useState } from "react"
import Custom from "./Custom"


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