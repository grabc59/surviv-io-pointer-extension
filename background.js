// background.js

// Called when the user clicks on the extension
chrome.browserAction.onClicked.addListener(function(tab) {
  // open surviv.io in a new tab
  chrome.tabs.create({"url": "http://surviv.io"});
});