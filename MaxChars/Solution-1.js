function maxChar(str){

  const charMap = {};                   // if we find a character that has more uses than max, then we set max equal to that new value.

  let max = 0;

  let maxChar = {};

  for (let char of str){               // for of loop is used for iterating through an array or a string or any type of iterable object.

    if(charMap[char]){

      charMap[char]++;
    }else{

      charMap[char]=1;
    }

    }
  for (let char in charMap){         // to iterate over the object here we use for in loop.

    if (charMap[char] > max){

      max = charMap[char];

      maxChar = char;
      
    }
  }
  return maxChar;
}

maxChar("abccccccd");
