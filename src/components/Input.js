import React from "react"

class Input extends React.Component{
    render() {
        return (
            <input placeholder={this.props.placeholder}></input>
        )
    }
}