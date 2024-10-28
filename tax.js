#!/opt/homebrew/bin/node

/*
This app is used to calculate the amount of tax to be paid
by workers in a company and discover what tax band they 
should be in

1. Band A: Anyone earning up to 500, no tax
2. Band B: Anyone earning above Band A and up to 1000, 10% tax
3. Band C: Anyone earning above Band B and up to 5000, 25% tax
4. Band D: Anyone earning above Band C, 40% tax 
*/

function TaxCalculator(taxAmount) {
    if (taxAmount < 500) {
        return console.log("You are in Band A. You pay no tax on £" + taxAmount);
    } else if (taxAmount > 500 && taxAmount < 1000) {
        let dueTax = (taxAmount * 10)/100;
        return console.log("You are in Band B. You are paying £" + dueTax + " tax on £" + taxAmount);
    } else if (taxAmount > 1001 && taxAmount <= 5000) {
        let dueTax = (taxAmount * 25)/100;
        return console.log("You are in Band C. You are paying £" + dueTax + " tax on £" + taxAmount);
    } else if (taxAmount > 5001) {
        let dueTax = (taxAmount * 40)/100;
        return console.log("You are in Band D. You are paying £" + dueTax + " tax on £" + taxAmount);
    } else {
        let dueTax = (taxAmount * 5)/100;
        return console.log("You are in Band. You are paying £" + dueTax + " tax on £" + taxAmount);
    }
}

/* 
1. To test this application, simply type 
TaxCalculator(insert-amount-to-be-calculated-here);

2. Use only whole numbers for this test

3. In the terminal
*/

TaxCalculator(400);