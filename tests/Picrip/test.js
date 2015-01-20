QUnit.module("getAllBackgroundImages");
QUnit.test("gets inline background images", function(assert){
	var backgroundImages = Picrip._getAllBackgroundImages();
	var thisPath = window.location.href.substr(0, window.location.href.lastIndexOf("/"));
	assert.notEqual(backgroundImages.indexOf(thisPath + "/background-pic1.png"), -1, "got inline background images");
});
QUnit.test("gets background images from CSS", function(assert){
	var backgroundImages = Picrip._getAllBackgroundImages();
	var thisPath = window.location.href.substr(0, window.location.href.lastIndexOf("/"));
	assert.notEqual(backgroundImages.indexOf(thisPath + "/background-pic2.png"), -1, "got css background images");
});