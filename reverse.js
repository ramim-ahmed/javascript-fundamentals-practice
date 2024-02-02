const richMan = ["elon musk", "jeff bezus", "mark jukarberg", "bill gates"];

let reverseString = [];
for (let i = richMan.length - 1; i >= 0; i--) {
  const str = richMan[i];
  reverseString.push(str);
}

console.log(reverseString);

const colors = ["red", "blue", "green", "yellow", "orange"];
const reversedColors = [];
for (let i = colors.length - 1; i >= 0; i--) {
  const color = colors[i];
  reversedColors.push(color);
}
console.log(reversedColors);
