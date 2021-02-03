
var readlinesync = require('readline-sync');

function getArrayFromUser(){
    var ele = readlinesync.questionInt("Enter number of elements you want in array : ");
    var arr = [];
    for( var i = 0; i< ele; i++ ){
        var num = readlinesync.questionInt(`Enter ${i} num : `);
        if(num < 0){
            console.log("Please enter positive number!");
            var num = readlinesync.questionInt(`Enter ${i} num : `);
        }else{
        arr.push(num);
        }
    }
    console.log("Your input array is : "+"\x1b[31m%s\x1b[0m",arr.join(' '));
    return arr;
   
}

function narcissticNum() {
    var input = getArrayFromUser();
    
    var primecount=0;
    var narcount =0;
    var narcisstic = [];
    var primearr = [];
    var dummyarr = [];
    for (var i = 0; i < input.length; i++) {
        var isprime = true;
        for (var j = 2; j < Math.floor(input[i] / 2 + 1); j++) {
            if (input[i] % j == 0) {
                isprime = false;
            }

        }
        if (input[i] === 1 || input[i] === 0) {
            isprime = false;
        }
        if (isprime) {
            primecount++;
            primearr.push(input[i]);
        }

        var numberOfDigit = input[i].toString().length;

        let sum = 0;
        let temp = input[i];
        while (temp > 0) {
            let rem = temp % 10;
            sum += rem ** numberOfDigit;
            temp = Math.floor(temp / 10);
        }
        if (sum == input[i] ) {
            narcount++;
            narcisstic.push(input[i]);

        }
        if( sum != input[i] && isprime == false){
            dummyarr.push(input[i]);

        }
        
    }
    console.log("Number of prime elements in an array are : "+"\x1b[31m%s\x1b[0m",primecount);
   

    console.log("Number of narcisstic elements in an array are : "+"\x1b[31m%s\x1b[0m",narcount);
    
    console.log("Numbers that are neither prime nor narcisstic are : "+"\x1b[31m%s\x1b[0m",dummyarr.length == 0 ?"_": dummyarr.join(' '))
    

}
function repeat() {

    var repeatOption = readlinesync.question("Do you want to continue (Yes/No) (Y/N) (y/n) (YES/no)");
    if (repeatOption === 'YES' || repeatOption === 'yes' || repeatOption === 'y' || repeatOption === 'Y') {
        console.clear(); 
        CLI();
    } else if(repeatOption === 'NO' || repeatOption === 'N' || repeatOption === 'n' || repeatOption ===  'no') {
        console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");

    }else{
        console.log("\x1b[31m%s\x1b[0m","Type valid Keyword !");  
        repeat();
    }
}



// console.log(narcissticNum([10, 20, 30, 40, 2, 5, 7, 153, 1024, 1634, 11,19,23]));

function CLI(){
    console.log(`
                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    Count Prime and Narcisstic numbers in array :

                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>

                    1. Input array.

                    0. Exit.
                
                <<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>
    `)
    var option = readlinesync.questionInt("Enter Option : ");
    switch(option){
        case 1:
            narcissticNum();
            repeat();
            break;
        case 0:
            console.log("\x1b[31m%s\x1b[0m", "Operation Terminated !");
            break;
    }
}
CLI();