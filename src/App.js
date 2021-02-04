import './App.css';
import React, { useState } from 'react';
import ComponentA from "./components/taskOne/componentA";
import UserList from "./components/taskTwo/userListComponent"

var user = {
    name: "",
    surname: "",
    age: 12,
    address: "",
    active: false
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [Object.create(user),Object.create(user),Object.create(user)]
        };
        this.initUserList = this.initUserList.bind(this)
        this.initUserList()
    }

    initUserList = function () {
        let userList = this.state.userList;
        for(let i in userList) {
            userList[i].name = "" + i;
            userList[i].surname = "" + i;
            userList[i].age = 10 + i;
            userList[i].address = "a" + i;
            userList[i].active = false;
        }

        this.setState({
            userList: userList
        })
    }


    render() {
        return <div>
            <UserList userList={this.state.userList}/>
        </div>
    };
}

export default App;
