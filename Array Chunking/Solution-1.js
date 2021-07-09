function chunk(array, size) {

  const chunked = [];

  for (let element of array) {

    const last = chunked[chunked.length - 1];

    if (!last || last.lenght === size) {

      chunked.push([element]);
    }else {
      last.push(element);
    }
  }

  return chunked; 
}
chunk([1,2,3,4,5,6,7,8,9,10,11])
