// solve the patter with javascript loops;

// pattern 1
/*

*****
*****
*****
*****
*****

*/
function printPattern(n) {
  let pattern = "";
  let variable = 1;
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += variable + " ";
      variable++;
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printPattern(4);
