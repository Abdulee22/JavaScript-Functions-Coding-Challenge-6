// Task 1 - Business Profit Calculation //
function calculateProfit(costPrice, sellingPrice, unitsSold) {
let profit = (sellingPrice - costPrice) * unitsSold;
return `Total Profit: $${profit}`;} // calulation for the function 
console.log(calculateProfit(20, 30, 100)) // output 1000
console.log(calculateProfit(50, 70, 200));// output 4000
    
