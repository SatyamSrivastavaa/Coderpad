function getStartingNodes(indegree) {
    let nodes = [];
    for(let [v, d] of indegree) {
        if(d===0) {
            nodes.push(v);
        }
    }

    return nodes;
}

function topologicalSortUtil(graph, current, visited, stack) {
    visited.push(current);

    let nodes = graph.get(current);
    if(nodes) {
        for(let i=0; i<nodes.length; i++) {
            if(!visited.includes(nodes[i])) 
                topologicalSortUtil(graph, nodes[i], visited, stack);
        }
    }

    stack.push(current);
}

function topologicalSort(graph, indegree, K) {
    let visited = [];
    let stack = [];
    let startingNodes = getStartingNodes(indegree);

    for(let i=0; i<startingNodes.length; i++) {
        topologicalSortUtil(graph, startingNodes[i], visited, stack)
    }
    
    return stack.reverse();
}

function findOrder(dict, N, K) {
    let adjacencyList = new Map();
    let indegree = new Map();
    let count = 0;

    for(let word of dict) {
        for(let j=0; j<word.length; j++) {
            if(!indegree.has(word[j])) {
                indegree.set(word[j], 0);
                count++;
                if(count === K) break;
            }
        }

        if(count === K) break;
    }

    for(let i=0; i<N-1; i++) {
        let first = dict[i];
        let second = dict[i+1];
        let id = 0;

        while(first[id] === second[id]) {
            id++;
        }
        if(!adjacencyList.has(first[id])) {
            adjacencyList.set(first[id], [second[id]]);
        } else {
            adjacencyList.get(first[id]).push(second[id]);
        }
        indegree.set(second[id], indegree.get(second[id])+1);
    }

    return topologicalSort(adjacencyList, indegree, K)
}

// Test Case 1
const dictionary = ["baa", "abcd", "abca", "cab", "cad"];
console.log(findOrder(dictionary, dictionary.length, 4));

// Test Case 2
// const dictionary = ["caa", "aaa", "aab"];
// findOrder(dictionary, dictionary.length, 3)

// Test Case 3
// const dictionary = ["aab", "adb", "daf", "dbf", "fcb", "fbb", "eab", "efc", "efe"];
// findOrder(dictionary, dictionary.length, 6)