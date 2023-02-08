// prompt:
// space explorer's ship crashed on Mars! They send a series of SOS messages to Earth for help.

// Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, , determine how many letters of the SOS message have been changed by radiation.

function marsExploration(s) {
  // Write your code here
  let chopped = s;
  let score = 0;
  while (chopped.length > 2) {
    console.log(chopped);
    if (chopped[0] != "S") {
      score++;
    }
    if (chopped[1] != "O") {
      score++;
    }
    if (chopped[2] != "S") {
      score++;
    }
    chopped = chopped.slice(3);
  }
  return score;
}
