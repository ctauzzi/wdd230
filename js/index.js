let date = new Date();
let year = date.getFullYear();
let currentDate = document.lastModified;
document.querySelector("span.year").textContent = year;
document.querySelector("span.updated").textContent = currentDate;