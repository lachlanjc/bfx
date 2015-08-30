chrome.omnibox.onInputEntered.addListener(
  function(text) {
    if (text.length === 0) {
      // No input, so just open Buffer
      chrome.tabs.create({ url: "https://buffer.com/app/" });
    } else {
      chrome.tabs.create({ url: "https://buffer.com/add?text=" + text });
    }
  }
);
