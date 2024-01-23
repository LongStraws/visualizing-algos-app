export function dfs(grid, startNode, endNode, algo) {
  var list = [];
  const nodesInOrder = [];
  nodesInOrder.push(startNode);
  list.push(startNode);
  startNode.isVisited = true;
  while (!!list.length) {
    const currentNode = list.pop();
    nodesInOrder.push(currentNode);
    if (currentNode === endNode) return nodesInOrder;
    currentNode.isVisited = true;
    const nodesToPush = getNeighbours(grid, currentNode);
    for (const node of nodesToPush) {
      node.previousNode = currentNode;
      list.push(node);
    }
  }
  return nodesInOrder;
}

function getNeighbours(grid, node) {
  const neighbors = [];
  const { col, row } = node;
  // console.log(node);

  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(
    (neighbor) => !neighbor.isVisited && !neighbor.isWall
  );
}
