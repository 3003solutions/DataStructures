function vowels(str){

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
  
}

vowels("Why do you ask?")
