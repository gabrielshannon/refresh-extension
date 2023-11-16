// Interval 2 
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('refreshButton').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var now = new Date();
      var millisTillTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 15, 0, 750) - now;

      if (millisTillTime < 0) {
        millisTillTime += 86400000; // it's after 10am, try 10am tomorrow.
      }
      setTimeout(function () {
        chrome.tabs.reload(tabs[0].id);

      }, millisTillTime);


    });
  });
});
