let arr = [1, 2, 0, 3, 4, null, "string", 7, 0, 8, 3]; 

function GetTypesOfNumbers () {
  let nOdd = 0; 
  let nEven = 0; 
  let nZero = 0; 
  
    for (let i = 0; i <= arr.length - 1; i++) {
      if (typeof arr[i] == "number") {
        if (arr[i] !== 0) {
          if (arr[i] % 2 !== 0) {
              nOdd++; 
          } else { nEven++; } 
        } else { nZero++; }
      }
    }
  console.log (`Even : ${nEven}, Odd : ${nOdd}, Zero : ${nZero}`);  
}


GetTypesOfNumbers (); 