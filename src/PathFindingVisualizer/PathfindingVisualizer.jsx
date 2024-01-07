import React, { Component } from "react";
import Node from "./Node/Node";
import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "./PathFindingAlgos/dijkstra"; // import dijkstra algorithm

import "./PathfindingVisualizer.css";

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const row = Math.max(Math.floor(height / 25) - 7, 10);
    const col = Math.floor(width / 25);
    const startNode = {
      row: 4,
      col: 4,
    };
    const endNode = {
      row: row - 5,
      col: col - 5,
    };
    const grid = getInitialGrid(row, col, startNode, endNode);
    grid[startNode.row][startNode.col].isStartNode = true;
    grid[row - 5][col - 5].isEndNode = true;
    this.setState({ grid, row, col, startNode, endNode });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-visited";
      }, 10 * i);
    }
  }

  animateShortestPath(nodesInShortestPathOrder) {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-shortest-path";
      }, 50 * i);
    }
  }

  visualizeDijkstra() {
    const { grid } = this.state;
    const startNode = grid[this.state.startNode.row][this.state.startNode.col];
    const finishNode = grid[this.state.endNode.row][this.state.endNode.col];
    const visitedNodesInOrder = dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    this.animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <button
          className={"dijkstra-start"}
          onClick={() => this.visualizeDijkstra()}
        >
          Visualize Dijkstra's Algorithm
        </button>
        <div className='grid'>
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall } = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => this.handleMouseDown(row, col)}
                      onMouseEnter={(row, col) =>
                        this.handleMouseEnter(row, col)
                      }
                      onMouseUp={() => this.handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

const getInitialGrid = (totRow, totCol, startNode, endNode) => {
  const grid = [];
  for (let row = 0; row < totRow; row++) {
    const currentRow = [];
    for (let col = 0; col < totCol; col++) {
      currentRow.push(createNode(row, col, startNode, endNode));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (row, col, startNode, endNode) => {
  return {
    row,
    col,
    isWall: false,
    isStart: row === startNode.row && col === startNode.col,
    isFinish: row === endNode.row && col === endNode.col,
    distance: Infinity,
    visitedNode: false,
    isVisited: false,
    ispathNode: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
