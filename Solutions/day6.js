//Time Complexity analysis - O(n)
//Time Complexity analysis - O(n)
const str = "Pranish @Shrastha";
function rot13(strlen) {

    const arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    const arr2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let res = [];
    for (let i = 0; i < strlen.length; i++) {
        const ind = arr.indexOf(strlen[i]); // get index of input string like I is at 8th index
        if (ind < 0) {
            res.push(strlen[i]);  // check for spaces if true it will skip 
        } else {
            res.push(arr2[ind]);
        }

    }
    console.log(res.join(''));
}
rot13(str);