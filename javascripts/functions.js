"use strict";

var tNumsPlus5 = function(tnum) {
 var result = "", digit;
 tnum = String(tnum);
 for(var i = 0; i < tnum.length; ++i) {
  digit = (Number(tnum[i]) + 5) % 10;
  console.log(digit);
 }
 return result;
};

var isArmstrong = function(num) {
 var result = "";
 var digit1 = num.toString()[0];
 var digit2 = num.toString()[1];
 var digit3 = num.toString()[2];
 
 digit1 = parseInt(digit1);
 digit2 = parseInt(digit2);
 digit3 = parseInt(digit3);

 digit1 = Math.pow(digit1, 3);
 digit2 = Math.pow(digit2, 3);
 digit3 = Math.pow(digit3, 3);

 var x = digit1 + digit2 +digit3;

 if(x === num){
  return true;
 }
 else{
  return false;
 }
};

var allArmstrong3s = function() {
 var result = '' ;
 for(var k = 100; k <= 999 ; ++k)
  if(isArmstrong(kiss))
   result = result + k + '';
  return result ;

}

var formatTelNum = function(n) {
 var num = n.toString();
 var result = '(' + num[0] + num[1] + num[2] + ')' + num[3] + num[4] + num[5] +'-' + num[6] + num[7] + num[8] + num[9];
 console.log(result);
 return result;

}