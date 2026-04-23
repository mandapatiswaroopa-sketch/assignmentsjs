//  Store the bank transactions 
interface bankTransactions {
    transactions: number[];
    creditCount: number;
    debitCount: number;
    totalCredit: number;
    totalDebit: number;
    balance: number;
    suspiciousCredit: number;
    suspiciousDebit: number;
    suspiciousCount: number;
    amount: number;
}
let transactions = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditCount = 0;
let debitCount = 0;
let totalCredit = 0;
let totalDebit = 0;
let balance = 0;
let suspiciousDebit = 0;
let suspiciousCredit = 0;
let suspiciousCount = 0;
let amount = 0;

//  Loop through transactions to get credit and debit transactions
for (let i = 0; i < transactions.length; i++) {
    amount = transactions[i]!;// used ! to avoid undefined error

    // to get the credit count and total credit amount

    if (amount > 0) {
        if (amount > 10000) {
        suspiciousCredit += amount;
        suspiciousCount++;
    }
        creditCount++;
        totalCredit += amount;

    }
    // to get the debit count and total debit amount
    else {
         if (amount < -10000) {
        suspiciousDebit += amount;
        suspiciousCount++;
    } 
        debitCount++;
        totalDebit += amount;
    }
    
}
// to get the balance amount
balance = totalCredit + totalDebit;
// Print the output in a given format
console.log(`Total Credit Transactions :${creditCount}`);
console.log(`Total Debit Transactions : ${debitCount}`);
console.log(`Total Credited Amount : ${totalCredit}`);
console.log(`Total Debited Amount : ${totalDebit}`);
console.log(`Remaining Balance : ${balance}`);
console.log(`Suspicious Credit Transaction : ${suspiciousCredit}`);
console.log(`Suspicious Debit Transaction : ${suspiciousDebit}`);
console.log(`Total Suspicious Transactions:${suspiciousCount}`);