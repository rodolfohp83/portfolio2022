
// ON DOCUMENT READY
document.addEventListener("DOMContentLoaded", function(){
	
	// SET SCROLL TO 0
	window.scrollTo(0, 0); // values are x, y
	
	// DISABLE SCROLL
	disable_scroll();
	
	// ON LOAD IMAGES
	imagesLoaded( document.querySelector('.js-image--1'), main );
	
});

// NO SCROLL
function no_scroll() {
    window.scrollTo(0, 0);
  }
  
  // DISABLE SCROLL
  function disable_scroll() {
      window.addEventListener('scroll', no_scroll);
  }
  
  // ENABLE SCROLL
  function enable_scroll() {
    window.removeEventListener('scroll', no_scroll);
  }
  