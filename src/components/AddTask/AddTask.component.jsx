import React, { Component } from "react";
import './AddTask.css';

export default class AddTask extends Component {

    render() {

        return (
        <div className="input-icon">
            <input
            className="search-box"
            type="search"
            placeholder="Add a task..."
            onChange={this.props.addItem}
            />
        </div>
        );
    }
}