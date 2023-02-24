// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example

// s= [2,2,1,3,2]
// d=4
// m=2

// length of choc bar must be 2, the sum of the int must be 4.
// there are two solutions, [2,2] and [1,3].

function birthday(s, d, m) {
  let score = 0;
  for(let i = 0; i<s.length; i++){
      let segment = s.slice(i, i+m)
      let segSum= segment.reduce((total, current) => { return total + current;
  }, 0);
      if (segment.length === m && segSum === d) {
          score+=1;
      }
  }
  return score
}

