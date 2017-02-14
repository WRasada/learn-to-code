var age = prompt("How old are you?");

var days = age * 365;

var leapYear = Math.floor(age / 4);

age = days + leapYear;

console.log("You've been alive for roughly " + age + " days!")
