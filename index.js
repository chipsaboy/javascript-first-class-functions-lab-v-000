function countdown(callback) {
  window.setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
  return function(value) {
    return value * multiplierValue
  }
}
