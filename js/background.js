chrome.browserAction.onClicked.addListener(function() {
  chromep.tabs.getCurrent(function(){
      chrome.tabs.create({ url : "/html/album.html?url=" + window.location.href }, function(){
  });
    chromep.tabs.executeScript({
	    file: "/js/picrip.js"
	  })
	  .then(function(){
	    return chromep.tabs.executeScript({
	      file: "/js/get-pics.js"
	    });
	  })
});

chrome.runtime.onMessage.addListener(function(payload){
  if(payload.event == "got-pics"){

  }
});