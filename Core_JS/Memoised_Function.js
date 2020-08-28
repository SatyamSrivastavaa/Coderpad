function memoize(func) {
    var memo = {};
    var slice = Array.prototype.slice;
  
    return function () {
      var args = slice.call(arguments);
      if (args in memo) return memo[args];
      else return (memo[args] = func.apply(this, args));
    };
  }
  
  function add(x, y) {
    return x + y;
  }
  
  const fun = memoize(add);
  console.log(fun(1,2));