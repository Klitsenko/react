import * as React from "react";

class ComponentB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }

    render() {
        return <h1>{this.props.text}</h1>
    }

}

export default ComponentB;