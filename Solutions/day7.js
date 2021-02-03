// Time Complexity analysis -Sorting- O(log(n)) + Iterate through a sorted array once O(n) ==> O(nlog(n))
var readlinesync = require("readline-sync");
function removeDuplicate() {
    var input = readlinesync.question("Enter Numbers with space : ");

    var a = input.toString().split(' ');
    console.log("Orignal Array : " + "\x1b[31m%s\x1b[0m", a.join(' '));
    var array = a.sort((a, b) => a - b);

    var res = [];
    var count = 0;
    for (var i = 0, j = 1; i <= array.length, j <= array.length; i++, j++) { 
        if (array[i] != array[j]) {
            res.push(array[i]);
        } else {
            count++;
        }
    }

    console.log("Array after removing duplicates : " + "\x1b[31m%s\x1b[0m", res.join(' '));
    console.log("Number of elements Removed : " + "\x1b[31m%s\x1b[0m", count);

}
removeDuplicate();

//Solution -2 (Array Helper Methods-)

// var input = readlinesync.question("Enter Numbers with space : ");
// var array = input.toString().split(' ');
// console.log("Orignal Array : "+"\x1b[31m%s\x1b[0m",array.join(' '));
// var a = array.sort((a,b) => a-b);
// var count =0;
// var res = [];
//  a.filter((char,index) => {

//     a.indexOf(char) == index ?  res.push(char) : count++ ;

// });

