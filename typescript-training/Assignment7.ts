let sentence: string = " Java programming is fun and challenging";
//Split in to substrings based on whitespaces
let splitSentence: string[] = [];
splitSentence = sentence.trim().split(/\s+/);
//To get the number of words
let words: number = splitSentence.length;
console.log(splitSentence);
//print the lenth of the string
console.log(`No. of words in the given sentence are ${words}`);

let reverseSentence = "";
reverseSentence = splitSentence.reverse().join(" ");
console.log(reverseSentence);
splitSentence = sentence.trim().split(/\s+/);
 let uppercaseSentence: string="";

for (let i = 0; i < splitSentence.length; i++) {
let word=splitSentence[i];
word =word? word.charAt(0).toUpperCase()+word.slice(1):"";
uppercaseSentence+=word+" ";
}
console.log(uppercaseSentence);
 