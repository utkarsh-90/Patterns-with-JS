//  pattern 1 in JS
/*
There are 4 general rules for solving a pattern-based question:

1. We always use nested loops for printing the patterns. For the outer loop, we count the number of lines/rows and loop for them.

2. Next, for the inner loop, we focus on the number of columns and somehow connect them to the rows by forming a logic such that for each row we get the required number of columns to be printed.

3. We print the ‘*’ inside the inner loop.

4. Observe symmetry in the pattern or check if a pattern is a combination of two or more similar patterns.

*/

function pattern1() {
    for (let i = 1; i <= 5; i++) {
      let star = "";
      for (let j = 1; j <= 5; j++) {
        star += "*";
      }
      console.log(star);
    }
}
pattern1()