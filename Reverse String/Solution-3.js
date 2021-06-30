function reverse(str) {
  
  let reversed = "";
  
  for(let character of str) {                     // creating a temporary veriable (character) of the object that we are iterating (str)
    
    reversed = character + reversed;              // We add that character on the string reversed
  
  }
  
  return reversed;                                // Now we return the string reversed 
  
}

reverse("Shawn");                             
