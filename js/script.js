

window.onscroll = function() { scrollFunction() };

function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "40px 0px";
        document.getElementById("logo").style.height = "50%"
    } else {
        document.getElementById("navbar").style.padding = "50px 0px";
        document.getElementById("logo").style.height = "60%"
    }
};

