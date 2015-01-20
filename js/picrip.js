var Picrip = (function(){
  function findAllImages(){
    var imageUrls = [];
    imageUrls = imageUrls.concat(getAllImageTagSrcs());
    imageUrls = imageUrls.concat(getAllBackgroundImages());
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
    return [];
  }
  function createImageList(images){
    var docfrag = document.createDocumentFragment();
    images.foreach(function(imageUrl){
      var imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      docfrag.appendChild(imageElement);
    });
    return docfrag;
  }
  return {
    findAllImages : findAllImages,
    createImageList : createImageList
  };
})();