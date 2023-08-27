// prompt:

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !==correctCode) return false;
  const currentArr = currentDate.split(" ");
  const expArr = expirationDate.split(" ");
  const expDay = parseInt(expArr[1])<10? `0${expArr[1].replace(",","")}`: expArr[1].replace(",","");
  const currentDay = parseInt(currentArr[1])<10? `0${currentArr[1].replace(",","")}`: currentArr[1].replace(",","")
  const months = {
    "January" : "01",
    "February": "02",
    "March": "03",
    "April": "04",
    "May" : "05",
    "June": "06",
    "July": "07",
    "August":"08",
    "September": "09",
    "October": "10",
    "November": "11",
    "December": "12",
  }
  const mashedExp =`${expArr[2]}${months[expArr[0]]}${expDay}`
  const mashedCurrent = `${currentArr[2]}${months[currentArr[0]]}${currentDay}`
  return +mashedCurrent<=+mashedExp
}

// alt solution:
// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }