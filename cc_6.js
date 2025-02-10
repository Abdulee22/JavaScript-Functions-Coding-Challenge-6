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

// Task 5 - Currency Conversion //
function convertCurrency(amount, exchangeRate) {
let convertAmount = amount * exchangeRate
return `Converted Amount: $${convertAmount.toFixed(2)}`;}; // function for currency conversion
console.log(convertCurrency(100, 1.1)); // output 110.00
console.log(convertCurrency(250, 0.85));// output 212.50

// Task 6 - Higher-Order Function for Bulk Orders //
let orders = [200, 600, 1200, 450, 800]; // orders
function applyBulkDiscount(orders, discountFunction) 
{return orders.map(discountFunction);}; // function for bulk discount orders
let discountFunction = amount => amount > 500 ? amount * 0.9 : amount;
let discountedOrders = applyBulkDiscount(orders, discountFunction);
console.log(discountedOrders) // logged

// Task 7- Business Expense Tracker //
function createExpenseTracker() {
 let totalExpenses = 0;
 return function(expense) {  
totalExpenses += expense; 
return `Total Expenses: $${totalExpenses}`; } }
let tracker = createExpenseTracker();// function for expense tracker
console.log(tracker(200)); // output 200
console.log(tracker(150)); // output 350
    

    
    
    
    
    
