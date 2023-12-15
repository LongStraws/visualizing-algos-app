import React, {Component} from "react";

import './Node.css';
import {computeHeadingLevel} from "@testing-library/react";

export default class Node extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className = "node"> </div>
    }
}