function validIP(str) {
    var validity = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/gm
    if (validity.test(str)) {
        var newstr = str.split('');
        var res = '';
        for (var i = 0; i <= newstr.length - 1; i++) {
            if (newstr[i] == '.') {
                res += '[.]';
            } else {
                res += newstr[i];
            }
        }

        console.log("\x1b[31m%s\x1b[0m",res);
        console.log("\x1b[33m%s\x1b[0m","valid IP ");

    } else {
        console.log("\x1b[31m%s\x1b[0m","Invalid IP address");
    }

}
validIP("255.155.155.255");

// function checkIPAddress(str) {
//     
//     var slot = str.split('.');
//     // var res = '';
//     //console.log(slot);
//     if (slot.length === 4) {   
//         var validity = slot.every(function (block) {
//             if (parseInt(block, 10) >= 0 && parseInt(block, 10) <= 255) {
//                 return true;

//             } else {
//                 return false;
//             }

//         });

//         if (validity) {
            
//             var finalIP = slot.join('[.]');
//             console.log("\x1b[33m%s\x1b[0m", "Valid IP.")
//             console.log("\x1b[31m%s\x1b[0m", finalIP);



//         } else {
//             console.log("\x1b[31m%s\x1b[0m", "invalid IP.")
//         }
//     } else {
//         console.log("\x1b[31m%s\x1b[0m", 'Invalid IP.');
//     }

// }
// //console.log('Invalid IP.');

// checkIPAddress('192.168.1.8');