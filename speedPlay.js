var videos = document.getElementsByTagName('video'),
length = videos.length

function setPlaybackRate(speed) {
  for (var i = 0; i < length; i++) {
    videos[i].playbackRate = speed
  }
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
   setPlaybackRate(request.data)
   sendResponse({feedback: "Speed changed"});
});