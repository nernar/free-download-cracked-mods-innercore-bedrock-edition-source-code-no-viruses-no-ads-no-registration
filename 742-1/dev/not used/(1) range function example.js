var re = ['a', 'b', 'c', 'd', 'e', 'f']

var re2 = []

function rangeFunction(size, func, startAt) {
  if (startAt == null) {
    startAt = 0
  }

  if (typeof func !== 'function') {
    func = function() {}
  }
  
  var to_map = Object.keys(JSON.parse(JSON.stringify(Array(size+1))))
  
  to_map = to_map.map(function (x) { 
    return Number(x)
  });
  
  return to_map.map(function(i) {
    func(i + startAt)});
}

rangeFunction(5, function(num) {
  re2.push(re[num])
})

console.log(re2);