window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "40px 0px";

    } else {
        document.getElementById("navbar").style.padding = "50px 0px";
        
    }
}

$(".carousel").owlCarousel({
    margin: 20,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });