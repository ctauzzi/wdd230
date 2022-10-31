let currDate = Date.now();
    
console.log(currDate);

let visitMessage = document.querySelector("#visitMessage");
let daysSince = document.querySelector("#daysSince");

if (!localStorage.getItem("visitDate"))
{
    localStorage.setItem("visitDate", currDate);
    visitMessage.textContent = "This is your first visit."
}
else
{
    let prevDate = localStorage.getItem("visitDate");
    
    let difference = currDate - prevDate;
    // console.log(difference);
    let daysBtwn = Math.floor(difference / 1000 / 60 / 60 / 24);
    daysSince.textContent = daysBtwn;
    // console.log(daysBtwn);
    localStorage.setItem("visitDate", currDate);
}
