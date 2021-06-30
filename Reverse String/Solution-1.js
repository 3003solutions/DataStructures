function reverse(str) {
    
    var newString = "";                 // Creating a empty string 
    
    for(var i = str.length - 1; i >=0; i--) {        // Starting loop from the last character (str.length -1)
        
        newString += str[i];
    }
    
    return newString;
    
}

reverse('apple');
