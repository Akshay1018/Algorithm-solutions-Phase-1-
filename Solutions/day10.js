//Time Complexity analysis -O(n^2) Every Function is traversing through every row and column once.
//Space Complexity analysis -O(n)
var readlinesync = require("readline-sync");


function OneMatricesInput() {


    console.log("\x1b[33m%s\x1b[1m", "Matrix Input");
    do {
        var row1 = readlinesync.questionInt("\x1b[33m\x1b[1mEnter number of rows in Matrix - A :");
        var col1 = readlinesync.questionInt("\x1b[33m\x1b[1mEnter number of columns in Matrix- A :");
        var matrixA = new Array(row1);
        if (row1 == col1) {


            for (var i = 0; i < row1; i++) {
                matrixA[i] = new Array(col1);
            }

            for (var i = 0; i < row1; i++) {
                for (var j = 0; j < col1; j++) {
                    matrixA[i][j] = readlinesync.questionInt(`\x1b[32m\x1b[1mEnter row ${i} col ${j} Element for matrix A :`);
                }
            }
            return { matrixA };
        } else {
            console.log("invalid Matrix !");

        }
    }
    while (row1 != col1);

}

function getDifference() {
    var input = OneMatricesInput();
    var len = input.matrixA.length;
    var res = [];
    var sum1 = 0;
    var sum2 = 0;
    var mat = '';
    console.log("\x1b[33m%s\x1b[1m", "Input Matrix : ");
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            mat += input.matrixA[i][j] + ' ';
        }

        console.log("\x1b[31m%s\x1b[0m", mat);
        mat = '';
    }
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (i == j) {
                sum1 += input.matrixA[i][j];
            }
            if (i + j == len - 1) {
                sum2 += input.matrixA[i][j];
            }
        }
    }
    res.push(sum1, sum2);
    // console.log(res);
    var diff = sum1 - sum2;
    if (diff < 0) {
        diff *= -1;
    }
    console.log("\x1b[33m\x1b[1mDifference of diagonal elements is : ")
    console.log("\x1b[31m%s\x1b[0m", diff);
}


function printSum() {
    var input = OneMatricesInput();
    var res = [];
    var sum1 = 0;
    var sum2 = 0;
    var mat = '';
    var len = input.matrixA.length;
    console.log("\x1b[33m%s\x1b[1m", "Input Matrix : ");
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            mat += input.matrixA[i][j] + ' ';
        }

        console.log("\x1b[31m%s\x1b[0m", mat);
        mat = '';
    }

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            if (i == j) {
                sum1 += input.matrixA[i][j];
            }
            if (i + j == len - 1) {
                sum2 += input.matrixA[i][j];
            }
        }
    }
    res.push(sum1, sum2);
    console.log("\x1b[33m\x1b[1mSum of diagonal elements is : ")
    console.log("\x1b[31m%s\x1b[0m", res.join(' '));
}

function printDiagonal() {
    var input = OneMatricesInput();
    var res = [];
    var res1 = [];
    var len = input.matrixA.length;
    var mat = '';
    console.log("\x1b[33m%s\x1b[1m", "Input Matrix : ");
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            mat += input.matrixA[i][j] + ' ';
        }

        console.log("\x1b[31m%s\x1b[0m", mat);
        mat = '';
    }
    for (var i = 0; i < len; i++) {   //
        for (var j = 0; j < len; j++) {  // 
            if (i == j) {    // chk for diagnol
                res.push(input.matrixA[i][j]);
            }
        }
    }
    console.log("\x1b[33m%s\x1b[0m", "Right diagonal elements :");
    console.log("\x1b[31m%s\x1b[0m", res.join(' '));
    for (var r = 0; r < len; r++) {
        for (var c = 0; c < len; c++) {
            if (r + c == len - 1) {  // n =3 ,2
                res1.push(input.matrixA[r][c]);
            }
        }

    }
    console.log("\x1b[33m%s\x1b[0m", "Left diagonal elements :");
    console.log("\x1b[31m%s\x1b[0m", res1.join(' '));



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

function CLI() {
    console.log(`
                \x1b[32m\x1b[2m*******************************************
                \x1b[36m\x1b[1m         Matrix Manuplation
                \x1b[32m\x1b[2m*******************************************
                    
                \x1b[36m\x1b[1m    1.  Print diagonals of matrix.
                \x1b[36m\x1b[1m    2.  Print sum of diagonals in matrix.
                \x1b[36m\x1b[1m    3.  Absolute Difference of diagonals.
                
                \x1b[32m\x1b[2m*******************************************
                \x1b[36m\x1b[5m        Press 0 to exit.
                \x1b[32m\x1b[2m*******************************************  
    
    
    `);
    var option = readlinesync.questionInt("\x1b[31m\x1b[1mEnter your option to proceed :");
    switch (option) {
        case 1:
            printDiagonal();
            repeat();
            break;
        case 2:
            printSum();
            repeat();
            break;
        case 3:
            getDifference();
            repeat();
            break;
        case 0:
            console.log("operation Terminated !");
            console.log("hello\x1b[2m");
            break;

        default:
            console.clear();
            console.log("Enter valid input! Choose correct option:");
            CLI();
    }
}
CLI();


