let lastModified = new Date(document.lastModified);
let fullDate = lastModified.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let time = lastModified.toLocaleString('en-GB', {hour: "2-digit", minute: "2-digit", second: "2-digit"});
let dateTime = `Last Updated: ${fullDate} ${time}`;
document.getElementById("lastModified").innerHTML = dateTime;


let date_display = new Date(document.date_display);
let real_display = date_display.toLocaleString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"});
let used_display = real_display;
document.querySelector("real_display").innerHTML=dateTime;