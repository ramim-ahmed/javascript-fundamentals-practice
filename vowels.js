// vowels
const vowels = ["a", "e", "i", "o", "u", "i", "b", "a", "e"];

// const country = "Bangladesh is beautiful country. I love this country";
// let vowelsArr = [];
// function vowelsCheck(value) {
//   for (let i = 0; i < value.length; i++) {
//     const character = value[i];
//     for (let j = 0; j < vowels.length; j++) {
//       const vowelCharacter = vowels[j];
//       if (character === vowelCharacter) {
//         vowelsArr.push({ [character]: 1 });
//       }
//     }
//   }
// }

// vowelsCheck(country);
// // console.log(vowelsArr);
// function vowelsCounter(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     const keys = Object.keys(element);
//     for (const key of keys) {
//       if(keys.includes(key)) {

//       }
//     }
//   }
// }
// vowelsCounter(vowelsArr);
const countVowels = [];

for (let i = 0; i < vowels.length; i++) {
  if (countVowels[vowels[i]]) {
    countVowels[vowels[i]] += 1;
  } else {
    countVowels[vowels[i]] = 1;
  }
}
console.log(countVowels);
