window.onload = function() {
  document.getElementById("set").onclick = function() {
    var speedText = document.getElementsByName('playbackSpeed')[0].value,
    speed = parseFloat(speedText)

    chrome.tabs.executeScript(null, { file: "speedPlay.js" })

    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.sendRequest(tab.id, {data: speed}, function(response) {
      	if(response.feedback == "Speed changed") {
          alert("Speed changed to: " + speedText)
      	}
      });
    });
  };
};
