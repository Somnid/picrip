document.addEventListener("DOMContentLoaded", function(){
  var sourceUrl = window.location.search.substr(1).replace("url=", "");
  chrome.runtime.onMessage.addListener(function(payload){
    if(payload.event == "got-pics" && sourceUrl == payload.url){
      var imagesFrag = Picrip.createImageList(payload.data);
      document.body.appendChild(imagesFrag);
    }
  });
});