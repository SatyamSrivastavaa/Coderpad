// // import fun from './fun.js';

// // fun();

// class Monster {
//     constructor(name) {
//         this.name = name;
//     }

//     attack() {
//         console.log('Attack');
//     }
// }

// function walker(user) {
//     return () => {
//         console.log(`${user} can walk`);
//     }
// }

// function swimmer(user) {
//     return () => {
//         console.log(`${user} can swim`);
//     }
// }

// function flyer(user) {
//     return () => {
//         console.log(`${user} can fly`);
//     }
// }

// class SwimMonster extends Monster{
//     constructor(name) {
//         super(name);
//         this.swim = swimmer(name);
//     }
// }

// class BadMonster extends Monster{
//     constructor(name) {
//         super(name);
//         this.walk = walker(name);
//         this.fly = flyer(name);
//     }
// }

// class MON extends BadMonster {}

// let monster1 = new BadMonster('monster1');
// let monster = new Monster('monster55');
// let monster2 = new SwimMonster('monster2');
// let monster3 = new MON('monster3');

// monster1.walk()

// console.log(monster);

function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function () {
    var args = slice.call(arguments);
    console.log(arguments);
    console.log(args);
    if (args in memo) return memo[args];
    else return (memo[args] = func.apply(this, args));
  };
}

function add(x, y) {
  return x + y;
}

console.loG(memoize(add));
