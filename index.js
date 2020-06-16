// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem (stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️

/// // M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 */

// counter1 code
function counterMaker () {
  let count = 0
  return function counter () {
    return count++
  };
}

const counter1 = counterMaker()

// counter2 code
let count = 0

function counter2 () {
  return count++
}

/* Task 2: inning()

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning () {
  const random = Math.random() * 3
  const runs = Math.floor(random)
  return runs
}
inning()
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore (inning, numberOfInnings) {
  const initialScore = 0
  const scores = { Home: initialScore, Away: initialScore }
  for (i = 1; i <= numberOfInnings; i++) {
    scores.Home = scores.Home + inning()
    scores.Away = scores.Away + inning()
  }
  return scores
}
console.log('line86',finalScore(inning, 9))
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard (inning, numberOfInnings) {
  const initialScore = 0

  const innings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th']
  const scores = { Home: initialScore, Away: initialScore }
  for (i = 0; i < numberOfInnings; i++) {
    scores.Home = scores.Home + inning()
    scores.Away = scores.Away + inning()
  console.log(`line 116 scores: ${innings[i]} inning: Home:${scores.Home}, Away: ${scores.Away}`)
  }
}

scoreboard(inning, 9)

// const NOTIFICATION_STATES = {
//   info: 'Did you know? ...',
//   warning: 'Be careful here ...',
//   error: 'Something went wrong ...',
// };

// const inningSuffix =i=> {

//   1:i+='st',
//   2:i+='nd',
//   3:i+='rd',

// }
// inningSuffix(i)

// // if
// // i =1 i= i+st if i=2 i-2+nd if i = 3 i = 3+rd else i= i + th
