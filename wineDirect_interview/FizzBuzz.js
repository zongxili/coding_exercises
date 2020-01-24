for (let i = 1; i <= 100; i ++) {
  let ans = "";
  if (i % 3 === 0) {
    ans += "Fizz";
  }
  if (i % 5 === 0) {
    ans += "Buzz";
  }
  else ans = i;
  console.log(ans);
}