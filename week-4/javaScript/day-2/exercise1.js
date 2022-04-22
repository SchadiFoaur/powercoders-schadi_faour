// @ts-check
// For each single day of the week log the translated output
// e.g. if it is Monday, log "Montag" and so on
// Choose any language you like
// Try different ways: is it possible with if or switch?
let day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
for (let i = 0; i <= day.length; i++) {
  switch (day[i]) {
    case "Monday":
      day[i] = "Montag";
      break;
    case "Tuesday":
      day[i] = "Dienstag";
      break;
    case "Wednesday":
      day[i] = "Mittwoch";
      break;
    case "Thursday":
      day[i] = "Donnerstag";
      break;
    case "Friday":
      day[i] = "Freitag";
      break;
    case "Saturday":
      day[i] = "Samstag";
      break;
    case "Sunday":
      day[i] = "Sonntag";
      break;
  }
  console.log(day[i]);
}
