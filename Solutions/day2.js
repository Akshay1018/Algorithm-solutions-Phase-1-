var readlinesync = require("readline-sync");

function generatePrime() {
    var input = readlinesync.questionInt("Enten a Number : ");
    if (input < 1) {
        console.log("\x1b[31m%s\x1b[0m","Please enter positive number!")
        generatePrime();
    } else {
        var res = [];
        for (var i = 0; i < input; i++) {   //10 
            var isprime = true;
            for (var j = 2; j < Math.floor(i / 2 + 1); j++) {
                if (i % j === 0) {
                    isprime = false;
                }

            }
            if (i === 1 || i === 0) {
                isprime = false;
            }
            if (isprime) {
                res.push(i);
            }
        }
        console.log(`Prime Numbers less than ${input} are : ` + "\x1b[31m%s\x1b[0m", res.join(' '));
    }
}

function isprime(num) {
    var is_prime = true;
    if (num !== 2 && num % 2 === 0) {
        is_prime = false;

    } else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                is_prime = false;
                break;
            }
        }
    }
    return is_prime;

}

function FirstPrime() {
    var input = readlinesync.questionInt("Enten a Number : ", "\x1b[31m%s\x1b[0m");
    if (input < 1) {
        console.log("\x1b[31m%s\x1b[0m","Please enter positive number !");
        FirstPrime();
    } else{
        var res = [];

        var count = 0;
        var num = 2;
        while (count < input) {
            if (isprime(num)) {
                res.push(num);
                count++;
            }
            num++;
        }
        console.log(`First ${input} prime numbers are : `)
        console.log("\x1b[31m%s\x1b[0m", res.join(' '));
    }
}
function givenRange() {
    var num1 = readlinesync.questionInt("Enter first number : ", "\x1b[31m%s\x1b[0m");
    var num2 = readlinesync.questionInt("Enter second number : ", "\x1b[31m%s\x1b[0m");
    if (num1 < 1 || num2 < 1) {
        console.log("\x1b[31m%s\x1b[0m","One of your input number is negative.Please enter positive number !");
        givenRange();
    } else {
        var res = [];
        for (var i = num1; i <= num2; i++) {
            var isprime = true;
            for (var j = 2; j < Math.floor(i / 2 + 1); j++) {
                if (i % j == 0) {
                    isprime = false;
                }
            }
            if (isprime) {
                res.push(i);
            }
        }
        console.log(`Prime Numbers between ${num1} and ${num2} are :  `)
        console.log("\x1b[31m%s\x1b[0m", res.join(' '));
    }
}



function repeat() {

    var repeatOption = readlinesync.question("Do you want to continue (Yes/No) (Y/N) (y/n) (YES/no)");
    if (repeatOption === 'YES' || repeatOption === 'yes' || repeatOption === 'y' || repeatOption === 'Y') {
        console.clear();
        CLI();
    } else if (repeatOption === 'NO' || repeatOption === 'N' || repeatOption === 'n' || repeatOption === 'no') {
        console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");

    } else {
        console.log("\x1b[31m%s\x1b[0m", "Type valid Keyword !");
        repeat();
    }
}

function CLI() {
    console.log(`
                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>

                           Prime Number Manipulation :

                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    1. Prime Numbers less than N.

                    2. First N Prime Numbers .

                    3. Generate Prime Numbers in a given range.

                    0. Exit.
                
                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>
    `)
    var option = readlinesync.questionInt("Enter your option as per menu :");
    switch (option) {
        case 1:
            generatePrime()
            repeat();
            break;
        case 2:
            FirstPrime();
            repeat();
            break;
        case 3:
            givenRange();
            repeat();
            break;
        case 0:
            console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");
            break;
    }
}
CLI();