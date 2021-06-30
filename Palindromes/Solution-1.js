function palindrome (str) {

  const reversed = str.split('').reverse().join('');             // puting our string into an array and reversing it and turning it back to a string

  return str === reversed;                                       // cheking to see if our intial value is the same as the result using boolean values.
}

palindrome('lool')
