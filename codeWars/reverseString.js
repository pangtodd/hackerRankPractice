// prompt:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split('').resverse().join('');
}

// alt solution:
// const solution = s => [...s].reverse().join('')
