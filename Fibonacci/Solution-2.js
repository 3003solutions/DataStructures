function fib(n){        // solving fibonacci using recursive

  if (n <2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}

fib(10)
