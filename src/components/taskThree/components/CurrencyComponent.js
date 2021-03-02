import * as React from 'react';

class CurrencyComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <ul>
                <li>Currency = {this.props.name}</li>
                <li>Buy = {this.props.rateBuy}</li>
                <li>Sell = {this.props.rateSell}</li>
            </ul>
        </div>
    }
}
export default CurrencyComponent;