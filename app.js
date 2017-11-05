function startScript() {
  var entity = document.querySelector('.movie');

  document.querySelector('a-assets').addEventListener('loaded', function() {
    console.log("OK LOADED");
  });

  window.onload = startScript;

//For video
//  function showVideo() {
//    $(entity).attr('visible', 'true');
//    $(entity).attr('autoplay', 'true');
//    console.log('entity', entity)
//  }
//
//  setTimeout(showVideo, 6000);
//
//  entity.addEventListener('materialvideoloadeddata', function(event) {
//    console.log('materialvideoloadeddata');
//    entity.play();
//  });

}
