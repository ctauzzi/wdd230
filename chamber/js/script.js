const date = new Date();
const year = date.getFullYear();
const currentDate = document.lastModified;
const datefield = document.querySelector(".date");
const now = new Date();

document.querySelector("span.year").textContent = year;
document.querySelector("span.updated").textContent = currentDate;

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const button = document.getElementById("navbutton");
button.onclick = toggleMenu;

