function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
