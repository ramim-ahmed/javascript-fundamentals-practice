const title = "React is most popular javascript framework";
// now replace the context framework replace with library;

const titleSplit = title.split(" ");
for (let i = 0; i < titleSplit.length; i++) {
  const element = titleSplit[i];
  if (element === "framework") {
    titleSplit[i] = "library";
  }
}

console.log(titleSplit.join(" "));
