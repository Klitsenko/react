import * as React from 'react';
import CurrencyComponent from "./CurrencyComponent";

const dataUrl = "https://api.ifcityevent.com/currency";

class CurrencyApiCallComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "name",
            rateBuy: "rate",
            rateSell: "sell"
        };

        this.getCurrencyUpdate = this.getCurrencyUpdate.bind(this);
    }

    componentDidMount() {
        this.getCurrencyUpdate();
    }

    getCurrencyUpdate()  {
        fetch(dataUrl)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    rateBuy: data.rateBuy,
                    rateSell: data.rateSell
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        return <div>
            <CurrencyComponent name={this.state.name} rateBuy={this.state.rateBuy} rateSell={this.state.rateSell}/>
            <button onClick={this.getCurrencyUpdate}>Update {this.state.rateBuy} </button>
        </div>
    }
}

export default CurrencyApiCallComponent;