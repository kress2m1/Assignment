#!/opt/homebrew/bin/node


function TaxCalculator(taxAmount) {
    if (taxAmount < 500) {
        return console.log("You are in Band A. You pay no tax on a salary of £" + taxAmount);
    } else if (taxAmount > 500 && taxAmount < 1000) {
        let dueTax = (taxAmount * 10)/100;
        return console.log("You are in Band B. You are paying £" + dueTax + " tax on a salary of £" + taxAmount);
    } else if (taxAmount > 1001 && taxAmount <= 5000) {
        let dueTax = (taxAmount * 25)/100;
        return console.log("You are in Band C. You are paying £" + dueTax + " tax on a salary of £" + taxAmount);
    } else if (taxAmount > 5001) {
        let dueTax = (taxAmount * 40)/100;
        return console.log("You are in Band D. You are paying £" + dueTax + " tax on a salry of £" + taxAmount);
    } else {
        let dueTax = (taxAmount * 5)/100;
        return console.log("You are in Band. You are paying £" + dueTax + " tax on on a salary of £" + taxAmount);
    }
}

//Run the application here
TaxCalculator(50000);