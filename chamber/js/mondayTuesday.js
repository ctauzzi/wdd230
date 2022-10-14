const myDate = new Date();
const parent = document.querySelector(".monday-box");

if((myDate.getDay() == 1) || (myDate.getDay() == 2)){
    parent.style.display = "block";
}