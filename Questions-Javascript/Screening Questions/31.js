function findFinalCoordinates(string) {
  var x =0;
  var y =0;
  
  for(var i=0; i<string.length; i++) {
    
    if(string.charAt(i) === 'U')
      y++;
    else if(string.charAt(i) === 'D')
      y--;
    else if(string.charAt(i) === 'L')
      x--;
    else if(string.charAt(i) === 'R')
      x++;
    else {
      console.log('It is not a valid command for the robot');
      return [0, 0];
    }
  }
  return [x, y];
}

var x = findFinalCoordinates('UDDLLRUUUDUURUDDUULLDRRRR');
console.log(`Final coordinates are: (${x[0]}, ${x[1]})`);

/*
  function getPathValue(path) {
    switch(path) {
        case 'U':
        case 'u':
        case 'R':
        case 'r':
            return 1;
        default:
            return -1;
    }
}

function getAxis(path) {
    switch(path) {
        case 'U':
        case 'u':
        case 'D':
        case 'd':
            return 'y';
        default:
            return 'x';
    }
}

function walkingRobot(path) {
    const pos = {
        x: 0,
        y: 0
    }

    for(let i = 0; i < path.length; i++) {
        pos[getAxis(path[i])] += getPathValue(path[i]);
    }

    return pos;
}

console.log(walkingRobot('UDDLLRUUUDUURUDDUULLDRRRR'));

*/