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
                    <div className="header-text-container">
                        <p className="header-text">
                            <a href="/">
                                Main page
                            </a>
                        </p>
                    </div>
                    <div className="header-text-container">
                        <p className="header-text">
                            <a href="/help">
                                Help
                            </a>
                        </p>
                    </div>
                    <div style={{display: "flex"}}className="alignment-right">
                        <button className="button header-text" style={{marginRight:10}}>
                            <a href="/login" >
                                Sign up
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