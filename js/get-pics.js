(function(){
  var images = Picrip.findAllImages();
  chrome.runtime.sendMessage({
    event : "got-pics",
    url : window.location.href,
    data : images
  });
})();