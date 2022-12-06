function externalFunction (firstArg) { 
  return function getSum (secondArg) { 
    return firstArg + secondArg; 
  }
}; 

let result = externalFunction (50)(25); 

console.log (result); 