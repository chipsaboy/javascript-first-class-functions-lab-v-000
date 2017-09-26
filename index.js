function countdown(callback) {
  setTimeout(function() {
    callback();
  }, 2000);
}