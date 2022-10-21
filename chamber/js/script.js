const date = new Date();
const year = date.getFullYear();
const currentDate = document.lastModified;
const datefield = document.querySelector(".date");
const now = new Date();

/* Displays current year and date in the footer of the page */
document.querySelector("span.year").textContent = year;
document.querySelector("span.updated").textContent = currentDate;

/* Displays current year and date at the top of the page */
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

/* Function that creates a "hamburger" menu */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const button = document.getElementById("navbutton");
button.onclick = toggleMenu;

/* Displays a message only on Monday and Tuesday */
const myDate = new Date();
const parent = document.querySelector(".monday-box");

if((myDate.getDay() == 1) || (myDate.getDay() == 2)){
    parent.style.display = "block";
}

/* Calculates windchill and displays only if certain conditions are met */
const temperature = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#windSpeed").textContent;
if((temperature <= 50) && (windSpeed >= 3)){
    const chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
    document.querySelector("#windChill").innerHTML = chill + "&#8457;";
}
