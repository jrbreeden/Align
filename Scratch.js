function sortedSquaredArray(array) {
    // Write your code here.
  
    let p1 = 0
    let p2 = array.length-1
    let output = []
  
    while(p2>=p1){
      if(Math.abs(array[p2]) > Math.abs(array[p1])){
        output.push(array[p2]**2)
        p2--
      }else{
        output.push(array[p1]**2)
        p1++
      }
    }
    return output.reverse();
  }

console.log(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]))