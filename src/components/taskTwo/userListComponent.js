import React from "react"
import User from "./userComponent";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: props.userList
        }
    }

    render() {
        return Object.values(this.state.userList).map((u) =>
            <User user={u}/>
        )
    };
}

export default UserList;