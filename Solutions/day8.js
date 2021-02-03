// //Time Complexity analysis - O(1);
var num = 20;
var bits = 2;
var MaxBits = 32; // Bit-size
function leftRotation(int, shift) {
    console.log("Orignal Number :" + "\x1b[33m%s\x1b[0m", int, int.toString(2));
    var res = (int << shift) | int >> (MaxBits - shift) & (0xFFFFFFFF);    // if int >= 32 subtract maxbits from it and do bitwise AND operation with MAX_VALUE of int ie-4294967295,11111111111111111111111111111111 in binary.
    console.log("Number ofter Left Rotation :" + "\x1b[31m%s\x1b[0m", res, res.toString(2));  // signed binary value 
}
function rightRotation(n, d) {
    console.log("Orignal Number :" + "\x1b[33m%s\x1b[0m", n, n.toString(2));
    var res = (n >> d) | (n << (MaxBits - d)) & (0xFFFFFFFF);   
    console.log("Number ofter Right Rotation :" + "\x1b[31m%s\x1b[0m", res, res.toString(2));  //signed Binary value  

}                                     
function rotation(number) {

    leftRotation(number, bits);
    rightRotation(number, bits);
    
}
rotation(num);

