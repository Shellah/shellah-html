// take a bill and split it amoung the number of people there
// inputs,action,output
// input:amount,number of people
// action:find the amount each person has to pay
// output: amount each person pays

function splitBill(amount, numOfPeople) {
const amountToPay = amount/numOfPeople;
return `Each person has to pay R${Math.ceil(amountToPay)}`;
}
console.log(splitBill(12000, 8));
console.log(splitBill(12800,9));