const statement = "I am a hard working person";
const splitStatement = statement.split(" ");

let reversedString = [];
for (let i = 0; i < splitStatement.length; i++) {
  reversedString.unshift(splitStatement[i]);
}
console.log(reversedString.join(" "));
