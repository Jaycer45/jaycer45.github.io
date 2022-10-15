let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;


const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

function toggleMenu() {
    console.log(document.getElementById("navigation").classList.toggle("hide"));
}

const d = new Date();
let day = d.getDay()

if (day === 1) {
    document.getElementById("meet").style.display = "";
}
else if (day === 2) {
    document.getElementById("meet").style.display = "";
}
else {
    document.getElementById("meet").style.display = "none";
}