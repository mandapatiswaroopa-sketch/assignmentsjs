interface customerDetails{
customerName : string;
creditScore :number;
income :number;
isEmployed : boolean;
debtToIncomeRatio : number;
}
let customerName = "John Doe";
let creditScore = 720;
let income = 55000.0;
let isEmployed = true;
let debtToIncomeRatio =35.0;
//If the credit score is above 750, the loan is automatically approved.
if(creditScore > 750)
{
  console.log("Congratulations! Your loan got approved");
}
//If the credit score is between 650 and 750, additional checks are performed.
else if(creditScore>650 && creditScore<=750){
//For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.
     if(income>=50000)
     { 
 //If the customer’s income is at least 50,000, the system checks whether the customer is employed.           
        switch(isEmployed)
        {
            case true:
                {
 //If the customer is employed, the system checks the debt-to-income (DTI) ratio.
               if(debtToIncomeRatio<40)
               {
//If the DTI ratio is less than 40%, the loan is approved.
                console.log("Congratulations! Your loan got approved");         
               }
                else 
                {
// If the DTI ratio is 40% or greater, the loan is denied.
                console.log("Oops! Your loan is denied as  your Debt To Income Ratio is greater than or equal to 40%");
                }
                break;
            }
//If the customer is unemployed, the loan is denied.
            default:
            console.log("Oops! Your loan is denied as you are not employed");
        }

     }
     else 
        console.log("Oops! Your loan is denied as your income is not above the $50000");
    }
    //If the credit score is below 650, the loan is denied.
else{
    console.log("Oops! Your loan is denied due to insufficient credit score");
}