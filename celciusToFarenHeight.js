function celciusToFarenHeight(value) {
  const farenHeight = (value * 9) / 5 + 32;
  return farenHeight;
}

const output = celciusToFarenHeight(50);
console.log(output);
