chrome.browserAction.onClicked.addListener(function() {
  chromep.tabs.query({
    active : true
  })
  .then(function(){
      return chromep.tabs.create({
        url : "/html/album.html?url=" + tabs[0].url
      });
  })
  .then(function(){
    return chromep.tabs.executeScript({
	    file: "/js/picrip.js"
	  });
  })
	.then(function)
	  return chromep.tabs.executeScript({
	     file: "/js/get-pics.js"
	  });
	});
});

chrome.runtime.onMessage.addListener(function(payload){
  if(payload.event == "got-pics"){

  }
});