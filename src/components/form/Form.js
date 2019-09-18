import React, { Component } from 'react'
import './Form.css';
export class Form extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City Name"></input>
                <input type="text" name="country" placeholder="Country Name"></input>
                <button className="btn btn-primary btn-sm btn3d">Get Weather</button>
            </form>
        )
    }
}

export default Form;
