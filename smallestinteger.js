class SmallestIntegerFinder {
    findSmallestInt(args) {
    //sort the array a-b is lowest to largest 
      args.sort((a,b)=>a-b)
    //return the first value 
      return args[0]
    }
  }