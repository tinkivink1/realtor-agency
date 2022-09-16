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
                    <dev className="header-text-container">
                        <p className="header-text">
                            <a href="/">
                                Main page
                            </a>
                        </p>
                    </dev>
                    <dev className="header-text-container">
                        <p className="header-text">
                            <a href="/help">
                                Help
                            </a>
                        </p>
                    </dev>
                    <div style={{display: "flex"}}className="alignment-right">
                        <button className="button header-text">
                            <a href="/login">
                                Sign in
                            </a>
                        </button>
                        
                        <button className="button header-text">
                            <a href="/login">
                                Sign in
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header