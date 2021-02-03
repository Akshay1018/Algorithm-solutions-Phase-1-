//Complexity analysis - O(1)


// //)Swapping Numbers
// //a) with temp variable
function swap(num1, num2) {
    let temp = num1;  
    num1 = num2;   
    num2 = temp;    
    console.log(num1, num2); 
}
// swap(3, 5);      // *Uncomment to call swap()*

// //)Swapping Numbers
// //a) with +,- operators
function swap(num1, num2) {
    num1 = num1 + num2;  
    num2 = num1 - num2;  
    num1 = num1 - num2;  
    console.log(num1, num2);   
}
//swap(5, 3);       // *Uncomment to call swap()*

//)Swapping Numbers
//a) with */ variable
function swap(num1, num2) {
    num1 = num1 * num2;  
    num2 = num1 / num2;  
    num1 = num1 / num2;   
    console.log(num1, num2);  


}
// swap(5, 3)     // *Uncomment to call swap()*

// //Swapping Numbers
// //a) with  XOR variable
function swap(num1, num2) {
    num1 = num1 ^ num2;   
    num2 = num1 ^ num2;     
    num1 = num1 ^ num2;   
    console.log(num1, num2);

}

// swap(3, 5);   // *Uncomment to call swap()*
// //Swapping Numbers
// // with XNOR variable
function swap(num1, num2) {
    num1 = ~(num1 ^ num2);   
    num2 = ~(num1 ^ num2);   
    num1 = ~(num1 ^ num2);    
    console.log(num1, num2); 

}
// swap(3, 5);   // *Uncomment to call swap()*
