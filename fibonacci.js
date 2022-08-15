//fibonacci numbers = each new seuence continues untill value find all even terms in fibonnacci sequence: 1, 2, 3, 5, 8,

// S - fibonacci numbers = each new number in sequence is the sum of the two precceding terms
// seuence continues untill value reaches 4 million
// find all even terms in sequence
// sum even terms in sequence
// whole positive numbers

// E - fibonnacci sequence: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// A -

// T -

// sequence1 = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// sequence1 = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
//  sequence_even = [2, 8, 34]
//  sum_seq1_even = 44

//let seq = [];
let sum = 0;
var firstTerm = 0;
var secondTerm = 1;
while (firstTerm + secondTerm <= 4000000) {
  let thirdTerm = firstTerm + secondTerm;
  firstTerm = secondTerm;
  secondTerm = thirdTerm;
  console.log(`the third term ${thirdTerm}`);
  if (thirdTerm % 2 == 0) {
    sum += thirdTerm;
  }
}
console.log(`sum of even numbers ${sum}`);
