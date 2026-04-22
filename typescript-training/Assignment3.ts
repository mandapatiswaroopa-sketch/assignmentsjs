//  Creating arrays for student names and marks
interface student{
name: string[];
marksObtained:number[];
updatedMarks: number[] ;
 total:number;
 average:number;
}
let name=["Suresh","Mahesh","Naresh"];
let marksObtained=[75, 80, 82];
let updatedMarks=[];
let total=0.0;
let average=0.0;
// Add 10 marks using assignment operator
for (let i = 0; i < marksObtained.length; i++) {
    updatedMarks[i] = marksObtained[i]!+=10;
}

// Print updated marks
console.log("Updated Marks:");
for (let i = 0; i < name.length; i++) {
    console.log(`${name[i]}: ${updatedMarks[i]}`);
}
// To calculate the average of updated marks
for (let i in updatedMarks) {
    total! += updatedMarks[i]!;  // used ! to avoid undefined error
}
average=total/updatedMarks.length;
console.log (`Average : ${average.toFixed(1)}`);



