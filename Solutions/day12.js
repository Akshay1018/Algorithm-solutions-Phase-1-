//Time Complexity analysis -O(n)- Traversing whole array once for matching target Number.
//Space Complexity analysis -O(n)
var readlinesync = require("readline-sync");
var arr = [12,14,16,19,21];
var target = readlinesync.questionInt("Enter target Number : ");

function IndexNumber(array, targetNum) {
    var len = array.length;
   
    for (var i = 0; i < len; i++) {
        
        if (array[i] == targetNum) {
            console.log(i);
            return;

        } else if (array[i] > targetNum) { 

            len = i;
        }

    }
    array.splice(len, 0, targetNum);
    
    console.log(len);
    console.log(array);
}
IndexNumber(arr, target);