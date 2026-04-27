let sentence:string="Java is a popular programming language. Java is used for web development, mobile applications and more."
let splitSentence: string[] = [];
//split the sentence so that we can check the word
splitSentence = sentence.trim().split(/\s+/);      
let count:number=0;
let indexOfTheWord: number=0;
console.log(sentence);
splitSentence.forEach(word => { 
    //checking for the word Java    
    if(word=="Java")
    {  
        //if word exists let us increase the count value by 1    
        count=count+1;        
        console.log(`${count}. Index of the word Java exists at  ${indexOfTheWord}`);
        
    }
    //counting the index based on the word length 
    indexOfTheWord+=word.length+1;
   
});
 console.log(`Total no. of occurences of the word Java is ${count}`);