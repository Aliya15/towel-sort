module.exports = function towelSort (matrix) {
   return matrix ? matrix.map((item, index) => {
    if (index !== 0 && index % 2 !== 0) {
      
      return item.reverse();
   } else {
     return item;
   }
 }).flatMap(x => x) : []
}
