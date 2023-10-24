window.onload=init;
let homePrice;
let downPayment;
let intrestRateForYear;
let loanTermInYears;
let mortgagePerMonth;
let loanAmount;
let monthlyIntrestRate;
let numberOfPayments;
let totalIntrest;

function init(){
    console.log("calculate mortgage button clicked");
    document.getElementById("mortgageCalculatorButton").onclick=mortgageCalculator;
//    console.log("calculate mortgage button clicked");
}
function mortgageCalculator(){
homePrice=Number(document.getElementById("homePriceField").value);
console.log("home price"+homePrice);
downPayment=Number(document.getElementById("downPaymentField").value);

console.log("downpayment"+downPayment);
loanTermInYears=Number(document.getElementById("loanTermField").value);
console.log("loan term in yeras"+loanTermInYears);
intrestRateForYear=Number(document.getElementById("intrestRateForYearField").value);
console.log("interest rate for  year"+intrestRateForYear);

mortgagePerMonth=document.getElementById("mortgagepermonthField");
//calculating interest rate for monthly
monthlyIntrestRate=(intrestRateForYear/1200);
console.log("monthly interest"+monthlyIntrestRate)
// document.getElementById("montlyIntrestRateField").value=monthlyIntrestRate;
//calculating loan amount
loanAmount=homePrice-downPayment;
console.log("loan amount after paying downpayment"+loanAmount);
//number of payments
numberOfPayments=(loanTermInYears*12);
console.log("number of payments"+numberOfPayments);

let b=1+monthlyIntrestRate;
console.log(b)
let a=-numberOfPayments;
console.log(a);
mortgagePerMonth.value=Number((loanAmount*monthlyIntrestRate)/(1-Math.pow(b,a))).toFixed(2);

console.log("mortgage to pay per month"+mortgagePerMonth.value);
totalIntrest=((mortgagePerMonth.value)*numberOfPayments)-loanAmount;
console.log("total intrest paid"+totalIntrest)
    
}