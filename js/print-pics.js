document.addEventListener("DOMContentLoaded", function(){
  chrome.runtime.onMessage.addListener(function(payload){
    if(payload.event == "print-images"){
      var imagesFrag = Picrip.createImageList(payload.data);
      document.appendChild(imagesFrag);
    }
  });
});