var readlinesync = require("readline-sync");


function OneMatricesInput() {


    console.log("Matrix Input");
    do {
        var row1 = readlinesync.questionInt("Enter number of rows in Matrix - A :");
        var col1 = readlinesync.questionInt("Enter number of columns in Matrix- A :");
        var matrixA = new Array(row1);
        if (row1 == col1) {


            for (var i = 0; i < row1; i++) {
                matrixA[i] = new Array(col1);
            }

            for (var i = 0; i < row1; i++) {
                for (var j = 0; j < col1; j++) {
                    matrixA[i][j] = readlinesync.questionInt(`Enter row ${i} col ${j} Element for matrix A :`);
                }
            }
            return { matrixA };
        } else {
            console.log("invalid Matrix ! Please Enter valid rows and cols.");

        }
    }
    while (row1 != col1);

}
var input = OneMatricesInput();
var digonalSum1 = 0;
var digonalSum2 = 0;
function validDiognalMat() {

    //1 2 3   a00 a01 a02 
    //   4 5 6   a10 a11 a12
    //   7 8 9   120 a21 a22


    var len = input.matrixA.length;
   // console.log(len);
   

    
    for (var i = 0; i < len; i++) {   //
        for (var j = 0; j < len; j++) {  // 
            if (i == j) {
                digonalSum1 += input.matrixA[i][j];
            }
        }
    }
    for (var i = 0; i < len; i++) {   //
        for (var j = 0; j < len; j++) {  // 
            if (i + j == len - 1) {
                digonalSum2 += input.matrixA[i][j];
            }
        }
    }
    if (digonalSum1 == digonalSum2) {
        return true;
    } else {
        return false;
    }
}
function validRowColMat() {
    var len = input.matrixA.length;
    
    
    for (var i = 0; i < len; i++) {
        var rowsum = 0;
        for (var j = 0; j < len; j++) {
            rowsum += input.matrixA[i][j];
        }
        if(rowsum == digonalSum1){
            return true;
        }else{
            return false;
        }
    }
    
    for (var i = 0; i < len; i++) {
        var colsum = 0;
        for (var j = 0; j < len; j++) {
            colsum += input.matrixA[j][i];
        }
        
        if(digonalSum1 == colsum){
            return true;
        }else{
            return false;
        }
    }
    console.log(rowsum);
    console.log(colsum);
    
}

function validSquareMatrix() {
    var res1 = validDiognalMat();
    var res2 = validRowColMat();
    var mat ='';
    var len = input.matrixA.length;
    console.log( "Input Matrix : ");
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len; j++) {
            mat += input.matrixA[i][j] + ' ';
        }

        console.log(mat);
        mat = '';
    }

    if (res1 && res2) {
        console.log("Above matrix is Valid square matrix");

    } else {
        console.log("Above matrix is Invalid square matrix")

    }
}

validSquareMatrix();