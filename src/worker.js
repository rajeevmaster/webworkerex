(function() {
  'use strict';
  onmessage = function(e) {
    setTimeout(() => {
      postMessage(`Hello ${e.data}`);
    }, 1000);
  };
})();
