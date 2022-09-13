import React from "react"

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            onMouseOverText: "asdsa"
        }
    }


    onMouseOver = () => {console.log(this.state.onMouseOverText)}
    render() {
        return (
            <div className="header" onMouseEnter={this.onMouseOver}>
                <h1 className="header-text">dfsfds</h1>
            </div>
        )
    }
}

export default Header