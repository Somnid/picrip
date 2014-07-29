function injectScripts(){
  chrome.tabs.executeScript({
	  file: "/js/picrip.js"
	}, function(){
	    chrome.tabs.executeScript({
	      file: "/js/get-pics.js"
	    });
	   });
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url : "/html/album.html"
  });
});

chrome.runtime.onMessage.addListener(function(payload){
  if(payload.event == "got-images"){

  }
  if(payload.event == "ready"){

  }
});

