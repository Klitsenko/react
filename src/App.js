import './App.css';
import React from 'react'
import UserList from "./components/taskTwo/userListComponent"

const userAddress = {
    city: "",
    country: ""
}

const user = {
    name: "",
    surname: "",
    age: 12,
    address: userAddress,
    status: false
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
            userList[i].name = "name" + i;
            userList[i].surname = "surname" + i;
            userList[i].age = 1 + i;
            userList[i].active = true;
            userList[i].address.city = "city" + i;
            userList[i].address.country = "country" + i;
            if('2' === i) {
                userList[i].active = false;
            }
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
