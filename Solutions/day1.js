// // Program for prime numbers

//var primearr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 91, 44,];

var primearr = [0, 1, 23, 5, 6, 7, 8, 888, 99, 56, 67, 97, 29, 79, 59, 99, 153, 157, 189];
function prime(arr) {
    var res = [];

    for (var i = 0; i < arr.length; i++) {
        var isprime = true;
        for (var j = 2; j < arr[i]; j++) {  // divisor
            if (arr[i] % j === 0) {  // 4
                isprime = false;
            }


        } if (arr[i] === 1 || arr[i] === 0) {
            isprime = false;
        }
        if (isprime) {
            res.push(arr[i]);
        }


    }
    console.log(res);
}
prime(primearr);

// function prime(arr) {
//     var primeArray = [];
//     for (var i = 1; i < arr.length; i++) {
//         var is_prime = true;
//         for (var j = 2; j < Math.floor(arr[i] / 2 + 1); j++) {
//             if (arr[i] % j == 0) {
//                 is_prime = false;
//             }
//         }
//         if (is_prime) {
//             primeArray.push(arr[i]);
//         }
//     }
//     return primeArray;
// }
// //)Swapping Numbers
// //a) with temp variable
// function swap(num1, num2) {
//     let temp = num1;  // temp = 3
//     num1 = num2;   // 3 == 5
//     num2 = temp;    // 5= 3
//     console.log(num1, num2); // 5,3
// }
// swap(3, 5);
// //)Swapping Numbers
// //a) with +,- operators
// function swap(num1, num2) {
//     num1 = num1 + num2;  // num1 = 5+3  => 8
//     num2 = num1 - num2;  // num2 = 8-3   => 5
//     num1 = num1 - num2;  // num1 = 8-5   => 3
//     console.log(num1, num2);   // 3, 5
// }
// swap(5, 3);
// //)Swapping Numbers
// //a) with */ variable
// function swap(num1, num2) {
//     num1 = num1 * num2;  // 5*3 = 15
//     num2 = num1 / num2;  // 15/3 = 5
//     num1 = num1 / num2;   // 15/5 = 3
//     console.log(num1, num2);  // 3,5


// }
// swap(5, 3)
// //Swapping Numbers
// //a) with  XOR variable
// function swap(num1, num2) {
//     num1 = num1 ^ num2;   // 3^5 = 0 011 ^ 0101  = 0110 (6)
//     num2 = num1 ^ num2;     // 0110 ^ 0101  =  0011(3)
//     num1 = num1 ^ num2;    // 0110 ^ 0011 = 0101(5)
//     console.log(num1, num2); // 5 3

// }

// swap(3, 5);
// //Swapping Numbers
// // with XNOR variable
// function swap(num1, num2) {
//     num1 = ~(num1 ^ num2);   // 0110 ^ 1000 = ~(1110) 0001
//     num2 = ~(num1 ^ num2);     // 0001 ^ 1000 = ~(1001) 0110 //6
//     num1 = ~(num1 ^ num2);    // 0001 ^ 0110 = ~(0111) 1000 //8
//     console.log(num1, num2); // 

// }

// swap(6, 8);


