var Picrip = (function(){
  function findAllImages(){
    var imageUrls = [];
    imageUrls = imageUrls.concat(getAllImageTagSrcs());
    imageUrls = imageUrls.concat(getAllBackgroundImages());
    imageUrls = dedupe(imageUrls);
    return imageUrls;
  }
  function getAllImageTagSrcs(){
    var urls = [];
    var images = document.getElementsByTagName("img");
    Array.prototype.forEach.call(images, function(image){
      urls.push(image.src);
    });
    return urls;
  }
  function getAllBackgroundImages(){
    var imageUrls = [];
    var allElements = document.querySelectorAll("*");
    for(var i = 0; i < allElements.length; i++){
      var element = allElements[i];
      var style = getComputedStyle(element, null).getPropertyValue("background-image");
      if(style != "none"){
        var url = extractCssUrl(style);
        imageUrls.push(url);
      }
    }
    return imageUrls;
  }
  function createImageList(images){
    var docfrag = document.createDocumentFragment();
    images.forEach(function(imageUrl){
      var imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      docfrag.appendChild(imageElement);
    });
    return docfrag;
  }
  function extractCssUrl(background){
    var reg = /(?:\(['|"]?)(.*?)(?:['|"]?\))/
    return reg.exec(background)[1];
  }
  function dedupe(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }
  return {
    findAllImages : findAllImages,
    createImageList : createImageList,
    _getAllBackgroundImages : getAllBackgroundImages
  };
})();