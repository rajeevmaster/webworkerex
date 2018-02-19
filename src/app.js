(function() {
  'use strict';

  //getting DOM elements ref
  const msgInput = document.querySelector('#msg');
  const msgContainer = document.querySelector('#workermsg');
  const button = document.querySelector('button');

  const displayMsg = msg => {
    msgContainer.innerHTML = msg;
  };

  if (window.Worker) {
    const worker = new Worker('./src/worker.js');

    worker.onmessage = function(e) {
      displayMsg(e.data);
    };

    button.addEventListener('click', e => {
      e.preventDefault();
      worker.postMessage(msgInput.value);
      displayMsg('worker is working');
    });
  }
})();
