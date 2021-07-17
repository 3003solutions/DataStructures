class queue {

  constructor() {
    this.data = [];               //array
  }

  add(record) {                  //adding to the beginning of the queue
    this.data.unshift(record);
  }

  remove() {                    //removing from the end of the queue
    return this.data.pop();
  }
  
}
