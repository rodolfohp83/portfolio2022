var loader = document.getElementsByClassName("bodymovin");
// var animation = document.getElementById("bodymovin");

function loadBMAnimation(loader) {

var animation = bodymovin.loadAnimation({
    container: loader,
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "https://assets1.lottiefiles.com/packages/lf20_PEeHJO.json"
  });

  loader.addEventListener("mouseenter", function() {
    animation.play();
  });
  
  loader.addEventListener("mouseleave", function() {
    animation.stop();
  });

}

for (var i = 0; i < loader.length; i++) {
loadBMAnimation(loader[i]);
}


