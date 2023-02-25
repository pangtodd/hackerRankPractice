// Propmt:
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example:

// s= '12:01:00PM'
// Return '12:01:00'.

// s= '12:01:00AM'
// Return '00:01:00'.

function timeConversion(s) {
  let time ="";
  const adjHour = parseInt(s.slice(0, 2))+12;
  
  if (s[s.length-2]==="A"&& parseInt(s.slice(0,2))===12){
      time = "00"+ s.slice(2,s.length-2);
  } else if(s[s.length-2]==="P" && parseInt(s.slice(0,2))<12){
      time = adjHour + s.slice(2,s.length-2);
  } else {
      time = s.slice(0, s.length-2)
  }
  return time;
}

// better solution- makes cleaner use of splitting, since minutes and seconds will not change. 
// Also like how they treated PM as a modifier- cleaner how they just add 12 to all PMs:
// const time = s.slice(0,-2);
// const modifier = s.slice(-2);

// let [hours, minutes, seconds] = time.split(':');

// if (hours == '12') {
//     hours = '00';
// }

// if (modifier === 'PM') {
//     hours = parseInt(hours, 10) + 12;
// }

// return `${hours}:${minutes}:${seconds}`;