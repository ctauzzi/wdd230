var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (window.outerWidth >= 825){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.padding = "5px 5%";
            document.querySelector(".logo-image").style.height = "100px";
        }
        else {
            document.querySelector(".navbar").style.padding = "10px 5%";
            document.querySelector(".logo-image").style.height = "250px";
    }
    }else if(window.outerWidth > 600 && window.outerWidth < 825){
        document.querySelector(".navbar").style.padding = " 3px 5%";
        document.querySelector(".logo-image").style.height="100px";
    }else{
        document.querySelector(".navbar").style.padding = " 2px 5%";
        document.querySelector(".logo-image").style.height="75px";
    }
}