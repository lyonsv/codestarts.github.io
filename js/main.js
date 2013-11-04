$(function(){
  // Call the functions in helper.js
  MBP.scaleFix();
  MBP.hideUrlBarOnLoad();
  MBP.enableActive();
  MBP.preventZoom();
  MBP.startupImage();

  // Click hamburger icon
  $('.menu-trigger').on('click', function(){
    // Show nav menu
    $('.simple-header nav').toggleClass('show');
  });
});
