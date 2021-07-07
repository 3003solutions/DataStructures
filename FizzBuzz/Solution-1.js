function fizBuzz(n){

  for(let i = 1;i <=n;i++){

    if(i % 3 === 0 && i % 5 === 0){   // or you can do i % 15 === 0 to make the code look more clean.

      console.log("fizBuzz");    
    }else if (i % 3 === 0){    // else if i is divisible by 3

      console.log("fizz");
      
    }else if(i % 5 === 0){    // else if i is divisible by 5

      console.log("buzz")
      
    }else{                    // else print i 

      console.log(i)
    }

  }
  
}

fizBuzz(100)
