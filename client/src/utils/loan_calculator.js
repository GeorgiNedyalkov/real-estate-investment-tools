function calculateLoan(purchasePrice, downpayment, annualInterestRate, years) {
    var principal = purchasePrice - (downpayment / 100) * purchasePrice;
    var monthlyInterestRate = annualInterestRate / 12 / 100;
    var loanTerm = years * 12;
    var monthlyPayment = principal *
        ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTerm)) /
            (Math.pow(1 + monthlyInterestRate, loanTerm) - 1));
    return monthlyPayment;
}
console.log(calculateLoan(100000, 20, 5, 20)); // 527
console.log(calculateLoan(100000, 20, 5, 30)); // 429
console.log(calculateLoan(100000, 30, 5, 20)); // 461
console.log(calculateLoan(100000, 10, 5, 20)); // 593
