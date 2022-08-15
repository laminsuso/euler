function sum_multiples_of_3_or_5(range) {
  // create an empty array of the desired length
  range = [...Array(range).keys()];

  // apply our reducer function
  let result = range.reduce(multiples);

  // add number to sum only if multiple of 3 or 5
  function multiples(total, num) {
    if (num % 3 == 0 || num % 5 == 0) {
      total += num;
    }
    return total;
  }
  console.log(result);
}

//T compare output to test cases
sum_multiples_of_3_or_5(10);
sum_multiples_of_3_or_5(20);
sum_multiples_of_3_or_5(1000);
