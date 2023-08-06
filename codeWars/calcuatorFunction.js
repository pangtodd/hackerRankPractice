// prompt:
// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(mathy) {return mathy?mathy(0):0}
function one(mathy) {return mathy?mathy(1):1}
function two(mathy) {return mathy?mathy(2):2}
function three(mathy) {return mathy?mathy(3):3}
function four(mathy) {return mathy?mathy(4):4}
function five(mathy) {return mathy?mathy(5):5}
function six(mathy) {return mathy?mathy(6):6}
function seven(mathy){return mathy?mathy(7):7}
function eight(mathy) {return mathy?mathy(8):8}
function nine(mathy) {return mathy?mathy(9):9}

function plus(right) {return (left) => left + right;}
function minus(right) {return (left) => left -right;}
function times(right) {return (left) => left *right;}
function dividedBy(right) {return (left) => Math.floor(left/right);}

// alt solution:
// const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
// const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));