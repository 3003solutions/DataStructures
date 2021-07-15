function anagrams(StringA, StringB){

  const aCharMap = buildCharMap(StringA);
  const bCharMap = buildCharMap(StringB);

  if (Object.keys(aCharMap).lenght != Object.keys(bCharMap).lenght){   //if aCharMap is not the same characters as bCharMap we return false

    return false;
  }

  for (let char in aCharMap){                        // we loop over aCharMap and we use (in) because we are looping over an object. 
    if (aCharMap[char] !== bCharMap[char]){          // look at aCharmap and if aCharMap at char is not the same as bCharMap at char than something is wrong.
      return false;
    }
  }
  
  return true;   // if we pass both tests than this must be a anagram and return true
}

function buildCharMap(str){         //helper function to build a character map. we loop the string and add it to character map

  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {            //clean up, and turn our string to lower case.
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;

  
}

anagrams('rail safety', 'fairy tales')

anagrams('Hi there', 'Bye there')

