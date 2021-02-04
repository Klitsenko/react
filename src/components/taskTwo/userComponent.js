import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user
        }
    }


    render() {
        return <div>
            <ul>
                <h1>{this.state.user.name}</h1>
                <li>{this.state.user.surname}</li>
                <li>{this.state.user.age}</li>
                <li>{this.state.user.address}</li>
                <li>{this.state.user.active}</li>
            </ul>
        </div>
    }
}

export default User;