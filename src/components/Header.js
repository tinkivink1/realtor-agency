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
                <div className="header header-container">
                    <h1 className="header-text">Main page</h1>
                    <h1 className="header-text">Help</h1>
                </div>
            </div>
        )
    }
}

export default Header