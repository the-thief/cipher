//caps and lowercase letters
function cipherN(str) { // LBH QVQ VG!

var arr = [];
var arr2 = [];

//capture number at end of string, convert to string
var key = /-?\d+$/g.exec(str);
key = Number(key[0]);

//remove number at end of string
str = str.substr(0, (str.search(/-?\d+$/g) - 1));

//split str into an array of chars
arr = str.split("");

//convert letters into unicode number
arr.forEach(function(e) {
  arr2.push(e.charCodeAt());
});
  //console.log("charCodeAt: arr2" + arr2);

//positive number
if(key > 0) {
arr2.forEach(function(e) {

  //A - M
  if (e > 64 && e < 78) {
    arr.push(e + key);
    arr.shift();
  }

  //N - Z
  else if (e > 77 && e < 91) {
    arr.push(64 + (e - 90 + key));
    arr.shift();
  }

  //a - m
  else if (e > 96 && e < 110) {
    arr.push(e + key);
    arr.shift();
  }

  //n - z
  else if (e > 109 && e < 123) {
    arr.push(96 + (e - 122 + key));
    arr.shift();
  }

  else {
    arr.push(e);
    arr.shift();
  }
 });

}

 //negative number
 else if (key < 0) {
   arr2.forEach(function(e) {
     //Check for spaces
     if (e === 32) {
       arr.push(e);
       arr.shift();
       }

     //a-m
     else if (e + key < 97) {
       arr.push(122 + (key + (e - 96)));
       arr.shift();
     }

     //N-Z works!
     else if (e + key >  64 && e + key < 91) {
       arr.push(e + key);
       arr.shift();
     }
   //n-z works!
   else if (e + key >  96 && e + key < 123) {
     arr.push(e + key);
     arr.shift();
   }
   //A-M works!
   else if (e + key < 65) {
     arr.push(90 + (key + (e - 64)));
     arr.shift();
   }
   });
 }

  //convert back to char
  arr.forEach(function(e) {
    arr2.push(String.fromCharCode(e));
    arr2.shift();
  });

//join chars in array back to a string
  str = arr2.join("");
  return str;
}
// Change the inputs below to test
//cipherN("SERR PBQR PNZC", 13);
 // cipherN("serr pbqr pnzc", 13);
  cipherN("FrEe CoDe CaMp", 13);
