
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(matrix === undefined) return res;
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 1) matrix[i].reverse();
    res = res.concat(matrix[i]);
  }
  return res;
}
