document.addEventListener("DOMContentLoaded", function(){
  var sourceUrl = window.location.search.substr(1).remove("url=");
  chrome.runtime.onMessage.addListener(function(payload){
    if(payload.event == "got-image" && sourceUrl == payload.url){
      var imagesFrag = Picrip.createImageList(payload.data);
      document.appendChild(imagesFrag);
    }
  });
});