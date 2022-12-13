var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")

tglbtn.addEventListener('click', () => {navlst.classList.toggle("navactive");});

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (window.outerWidth >= 825){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.padding = "5px 5%";
            document.querySelector(".logo-image").style.display = "none";
        }
        else {
            document.querySelector(".navbar").style.padding = "10px 5%";
            document.querySelector(".logo-image").style.height = "250px";
            document.querySelector(".logo-image").style.display = "block";
            document.querySelector(".nav-bar").style.display = "flex";
    }
    }else if(window.outerWidth > 600 && window.outerWidth < 825){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.padding = " 3px 5%";
            document.querySelector(".logo-image").style.height = "75px";
        }
        else {
            document.querySelector(".navbar").style.padding = "10px 5%";
            document.querySelector(".logo-image").style.height = "150px";
        }
    }else if(window.outerWidth <= 600){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.querySelector(".navbar").style.padding = "10px 5%";
            document.querySelector(".logo-image").style.height = "75px";
        }
        else {
            document.querySelector(".navbar").style.padding = "10 px 3%";
            document.querySelector(".logo-image").style.height = "75px";
        }
    }
}