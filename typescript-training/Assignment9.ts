//To Print * in a given pattern
let rowCount = 5;

for (let i = 1; i <= rowCount; i++) {
  let row = "";

  // to print spaces in each row
  for (let j = 1; j <= rowCount - i; j++) {
    row += " ";
  }

  // to print stars in each row after space
  for (let k = 1; k <= i; k++) {
    row += "*";
  }

  console.log(row);
}