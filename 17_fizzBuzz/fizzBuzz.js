const fizzBuzz = function(countArg) {
  let ans = ""
  for (let i = 1; i <= countArg; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
      console.log("FizzBuzz")
      ans += "FizzBuzz"
    }
    else if (i % 3 === 0) {
      console.log("Fizz")
      ans += "Fizz"
    }
    else if (i % 5 === 0) {
      console.log("Buzz")
      ans += "Buzz"
    }
    else {
      console.log(i);
      ans += String(i)
    }

    if (i != countArg) {
      ans += "\n"
    }
  }

  return ans;
};

// Do not edit below this line
module.exports = fizzBuzz;
