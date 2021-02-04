import * as React from "react";
import ComponentB from "./componentB";

class ComponentA extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "text"
        }

        this.changeText = this.changeText.bind(this);
    }


    changeText = function (e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return <div>
            <input type="text" onChange={this.changeText} value={this.state.text}/>
            <ComponentB text={this.state.text}/>
        </div>
    }
}

export default ComponentA