// Task 1 - Business Profit Calculation //
function calculateProfit(costPrice, sellingPrice, unitsSold) {
let profit = (sellingPrice - costPrice) * unitsSold;
return `Total Profit: $${profit}`;} // calulation for the function 
console.log(calculateProfit(20, 30, 100)) // output 1000
console.log(calculateProfit(50, 70, 200));// output 4000
    
// Task 2 - Sales Tax Computation // 
const calculateSalesTax = function(amount, taxRate) {
let salesTax = Math.floor(amount * taxRate)
 return `Sales Tax: $${salesTax}`; } //function for sales tax
 console.log(calculateSalesTax(100, 0.07)); // output 7
 console.log(calculateSalesTax(500, 0.1)); // output 50

// Task 3 - Employee Bonus Calculation //
const calculateBonus = (salary, performanceRating) => {
let bonus;
if (performanceRating ="Excellent") 
    {bonus = salary * 0.2;}
else if (performanceRating ="Good") 
    {bonus = salary * 0.1;}
else if (performanceRating ="Average") 
    {bonus = salary * 0.5;}
return `Bonus: $${bonus}`;}; // function for bonus calculation
console.log(calculateBonus(5000, "Excellent")); // output 1000
console.log(calculateBonus(7000, "Good")); // output 700

// Task 4 - Subscription Pricing Model //
function calculateSubscriptionCost(plan, months, discount = 0) {
let monthlyCost;
if (plan = "Basic") 
    {monthlyCost = 10}
else if (plan = "Premium") 
    { monthlyCost = 20}
else if (plan = "Enterprise") 
    {monthlyCost = 50}
let totalCost = (monthlyCost * months) - discount;
 return `Total Cost: $${totalCost}`;} // function for subscription calculation
console.log(calculateSubscriptionCost("Basic", 6, 10)); // output 50
console.log(calculateSubscriptionCost("Premium", 12, 0)); // output 240
    
    
    
