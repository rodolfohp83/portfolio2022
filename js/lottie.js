var animation = bodymovin.loadAnimation({
    container: document.getElementById('bodymovin'), // Required
    path: 'loader-rh.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
  });

  setTimeout(function() {
    $('#mydiv').fadeOut('fast');
  }, 3000); // <-- time in milliseconds

  

// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
    
//        // downscroll code
//    } else {
    
//       // upscroll code
//    }
//    lastScrollTop = st;
// });