function anagrams(stringA, stringB){                                          //simpler solution to anagrams
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');              // clean method.
}

anagrams('rail safety', 'fairy tales')
anagrams('Hi there', 'Bye there')
