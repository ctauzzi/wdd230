var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.padding = "5px 5%";
        document.querySelector(".logo-image").style.height = "100px";
    }
    else {
        document.querySelector(".navbar").style.padding = "10px 5%";
        document.querySelector(".logo-image").style.height = "175px";
    }
}