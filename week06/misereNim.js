// prompt:
// Two people are playing game of Misère Nim. The basic rules for this game are as follows:

// * The game starts with n piles of stones indexed from 0 to n-1. Each pile i (where 0 <= i<n) ) has s/i stones.
// * The players move in alternating turns. During each move, the current player must remove one or more stones from a single pile.
// * The player who removes the last stone loses the game.

// Given the value of n and the number of stones in each pile, determine whether the person who wins the game is the first or second person to move. If the first player to move wins, print First on a new line; otherwise, print Second. Assume both players move optimally.

function misereNim(s) {
  let sum = s.reduce((a,b) => a + b);
  if(sum == s.length) {
      return s.length % 2 == 0 ? 'First' : 'Second'
  }

   let nimSum = s.reduce((a,b) => a ^ b);
   return nimSum == 0 ? 'Second' : 'First'
}