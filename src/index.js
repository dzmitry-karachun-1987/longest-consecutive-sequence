module.exports = function longestConsecutiveLength(array) {
  
  const lgth = array.length;
  const set = new Set(array);
  var result = 0;

  for (var i = 0; i < lgth; i++) {
    if (!set.has(array[i] - 1)) {
      var jarr = array[i];
      while (set.has(jarr)) {
        jarr++;
        if (result < jarr - array[i]) {
          result = jarr - array[i];
        }
      }
    }
  }
  return result;
}