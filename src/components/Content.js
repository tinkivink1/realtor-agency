import React from "react"

class Content extends React.Component{
    render() {
        return (
            <div>
                <input className="input" placeholder="Input data here..."
                        width={150}>
                </input>
                <button className="button" onClick={console.log("sadsad")}>
                    Clickme
                </button>
            </div>
        )
    }
}

export default Content