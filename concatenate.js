var strArray = ["Tom", "Tim", "Tin", "Tik"];

// conatenate numbers array element in single string;
let singleStr = "";
for (let i = 0; i < strArray.length; i++) {
  const element = strArray[i];
  singleStr = singleStr + element;
}
console.log(singleStr);
