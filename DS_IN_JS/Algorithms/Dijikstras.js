function getMinCostNodeFromUnvisitedList(nodes, visitedNodes) {
    return Object.keys(nodes).reduce((least, node) => {
        if(least === null || nodes[node] < nodes[least]) {
            if(!visitedNodes.includes(node)){
               least = node 
            }
        }

        return least;
    }, null);
}

function dijkstra(graph) {
    const costs = Object.assign({finish: Infinity}, graph.start);
    const prevNodesMapping = {};
    const visitedNodes = ['start'];

    for(let node in graph.start) {
        prevNodesMapping[node] = 'start';
    }

    let currentNode = getMinCostNodeFromUnvisitedList(costs, visitedNodes);

    while(currentNode) {
        for(let child in graph[currentNode]) {
            let costFromStart = costs[currentNode] + graph[currentNode][child];

            if(!costs[child]) {
                costs[child] = costFromStart;
                prevNodesMapping[child] = currentNode;
            }

            if(costs[child] > costFromStart) {
                costs[child] = costFromStart;
                prevNodesMapping[child] = currentNode;
            }
        }

        visitedNodes.push(currentNode);
        currentNode = getMinCostNodeFromUnvisitedList(costs, visitedNodes);
    }

    const pathFromStartToEnd = [];
    let current = 'finish';

    while(current !== 'start') {
        pathFromStartToEnd.unshift(current);
        current = prevNodesMapping[current];
    }

    pathFromStartToEnd.unshift('start');

    return {
        cost: costs.finish,
        path: pathFromStartToEnd
    }
}

const weightedGraphObject = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
  };
  
let x = dijkstra(weightedGraphObject);
console.log(x);