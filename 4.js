function showNumbers (a, b) {
    let timerId = setInterval(function (){
      console.log(a); 
        if (a == b) {
          clearInterval(timerId); 
        } 
      a ++;   
    }, 1000); 
  }
showNumbers (10, 20); 