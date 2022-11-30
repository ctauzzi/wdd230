const date = new Date();
const year = date.getFullYear();
const currentDate = document.lastModified;

/* Displays current year and date in the footer of the page */
document.querySelector("span.year").textContent = year;
document.querySelector("span.updated").textContent = currentDate;
