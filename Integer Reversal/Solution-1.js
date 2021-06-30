function reverseInt (n) {

  const reversed = n

  .toString()                   // int > string > array > reverse > string 
  .split('')
  .reverse()
  .join('')

  return parseInt(reversed) * Math.sign(n);                  // converting our string to int and then using the math operator to properly show negative sign.
}

reverseInt(-123)
