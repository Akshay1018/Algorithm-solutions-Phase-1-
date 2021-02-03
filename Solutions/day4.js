//Time Complexity analysis - O(n) // Taking input from user ad a string and traversing every element of the string once.
//Space Complexity - O(1) 
var readlinesync = require('readline-sync');

function checkMultiple() {
    var userinput = readlinesync.question("Enter a Number : ");
    var oddSum = 0;
    var evenSum = 0;
    if (userinput < 0){
        console.log("please enter positive number!");
        checkMultiple();
    }else if (userinput <= 10) {
            console.log("\x1b[31m%s\x1b[0m", `${userinput} is not multiple of 11.Try again!`);
            checkMultiple();
        } else {
            for (var i = 0; i <= userinput.length; i++) {  
                if (i % 2 == 0) {
                    evenSum += (userinput.charAt(i) - '0');
                } else {
                    oddSum += (userinput.charAt(i) - '0');   
                }
            }
            if ((oddSum - evenSum) % 11 == 0) {                    
                console.log("\x1b[31m%s\x1b[0m", `${userinput} is multiple of 11.`);
            } else {
                console.log("\x1b[31m%s\x1b[0m", `${userinput} is not multiple of 11.Try again!`);
                checkMultiple();
            }
        }

}
function repeat() {

    var repeatOption = readlinesync.question("Do you want to continue (Yes/No) (Y/N) (y/n) (YES/no)");
    if (repeatOption === 'YES' || repeatOption === 'yes' || repeatOption === 'y' || repeatOption === 'Y') {
        console.clear();
        cli();
    } else if (repeatOption === 'NO' || repeatOption === 'N' || repeatOption === 'n' || repeatOption === 'no') {
        console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");

    } else {
        console.log("\x1b[31m%s\x1b[0m", "Type valid Keyword !");
        repeat();
    }
}



function cli() {
    console.log(`
                =======================================
                          Check Multiples :
                =======================================
                    1.  Check multiple of 11.
                    0.  Exit.
    `);
    var option = readlinesync.questionInt("Enter your option as per menu :");
    switch (option) {
        case 1:
            checkMultiple();
            repeat();
            break;
        case 0:
            console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");
            break;
    }

}
cli();