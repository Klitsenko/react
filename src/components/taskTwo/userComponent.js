import React from "react";
import './css/userListComponent.css'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.user,
            style: "",
            status:  "inactive"
        }
    }

    componentDidMount() {
        if (this.state.user.active && this.state.status === "inactive") {
            this.setState({
                style: "user-style-active",
                status:  "active"
            })
        }
    }

    render() {
        return <div>
            <ul>
                <h1>{this.state.user.name}</h1>
                <li>{this.state.user.surname}</li>
                <li>{this.state.user.age}</li>
                <ul>
                    <li>{this.state.user.address.city}</li>
                    <li>{this.state.user.address.country}</li>
                </ul>
                <li className={this.state.style}>{this.state.status}</li>
            </ul>
        </div>
    }
}

export default User;