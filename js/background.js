chrome.browserAction.onClicked.addListener(function() {
  chromep.tabs.query({
    active : true
  })
  .then(function(tabs){
      return chromep.tabs.create({
        url : "/html/album.html?url=" + tabs[0].url,
        active : false
      });
  })
  .then(function(){
    return chromep.tabs.executeScript({
	    file: "/js/picrip.js"
	  });
  })
	.then(function(){
	  return chromep.tabs.executeScript({
	     file: "/js/get-pics.js"
	  });
	});
});