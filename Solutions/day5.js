var readlinesync = require('readline-sync');
function splitOddEven() {
    var input = readlinesync.question("Enter a string : ");
    console.log("\x1b[33m%s\x1b[0m",input);
    var Oddres = [];
    var evenRes =[];
    var one = '111';
    var zero = '000';
    for (var i = 0; i < input.length; i++) {
        i %2 === 0 ? evenRes.push(input[i]) : Oddres.push(input[i]);
    }
    
    console.log("\x1b[31m%s\x1b[0m",zero+Oddres.join('')+one);
    console.log("\x1b[31m%s\x1b[0m",zero+evenRes.join('')+one);
}
splitOddEven();