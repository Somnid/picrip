(function(){
  var images = Picrip.findAllImages();
  chrome.runtime.sendMessage({ event : "got-images", data : images });
})();