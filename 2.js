function isPrime (number) {
    if (number === 0 || number == 1) {
      return false; 
    }
    if (number < 1000) {
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          return false;
        }
     }
    return true;
    } else { return "information is incorrect"; }
  }; 
    
  console.log (isPrime (6)); 
  console.log (isPrime (5));
  console.log (isPrime(1007)); 
  console.log (isPrime(0)); 