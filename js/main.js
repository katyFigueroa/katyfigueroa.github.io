jQuery( document ).ready(function( $ ) {

     $('.on').show(2000);
    $("#habili-semicircle-pointer").addClass('first-rotation ');
   

    $( ".first-position" ).click(function(e) {
      $("#habili-semicircle-pointer").removeClass().addClass('first-rotation ease-rotation');
      $('.habili-info-block').hide();
      $('.web').show(2000);
      e.preventDefault();
    });
    
    $( ".fifth-position" ).click(function(e) {
      $("#habili-semicircle-pointer").removeClass().addClass('fifth-rotation ease-rotation'); 
      $('.habili-info-block').hide();
      $('.diseño').show(2000);
      e.preventDefault();
    });

}); 

var canvas, stage, exportRoot;
function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
	exportRoot = new lib.Sintítulo2();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}