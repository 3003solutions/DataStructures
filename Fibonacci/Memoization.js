function memoize(fn){               // fast fib using memoization to improve performance
  const cache = {};
  return function(...args){
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
    
  };

}


function slowFib(n){   // slow fib using recursion.

  if (n < 2) {
    return n;
  }

  return slowFib(n - 1) + slowFib(n - 2);

  
}

const fib = memoize(slowFib);
