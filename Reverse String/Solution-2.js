function reverse(str){

  const arr = str.split('');   // Splitting our string into an array and assigning it to arr veriable.

  arr.reverse();               // Reversing the array using reverse helper
  
  return arr.join('');        // Joining the array in to string again
}

reverse('Shawn');
