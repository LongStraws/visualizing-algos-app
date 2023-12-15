import React, {Component} from 'react';
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = [];
        for(let row = 0; row < 15; row++){

        }
    }

    render() {
        return(
            <div>
                <Node></Node>
            </div>
        )
    }
}