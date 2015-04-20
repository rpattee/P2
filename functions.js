//part A

function isArmstrong(n){
	n=String(n);
	sum =0;
	for(i=0; i<n.length; i++){
		sum+=Math.pow(parseInt(n[i]),n.length);
	}
	n=parseInt(n);
	if(n==sum){
		return true;
	}
	else{
		return false;
	}
}

//part B
function allArmstrongs(){
	"use strict"
	var result = "";
for(var i=1; i<=100000; i++){
	if(isArmstrong(i))
		result=result+i+" ";
	}
		return result;
}

//part C
function allSubstrings(s){
	var result = "";
for(var i=0; i<=s.length; i++){
	for(var j=i+1; j<=s.length;j++){
		result=result+s.substring(i,j)+", ";
	}
}
return result;
}


//part D

function allSubstrings2(s){
var result=[];
for(i=0; i<=s.length; i++){
	for(j=i+1; j<=s.length;j++){
		var sub=s.substring(i,j);
		result.push(sub);
	}
}
	return result;
}

//part E

function maxWord(s) {
    var str = s.split(" ");
    var longest = 0;
    var word = "";
    for (var i = 0; i < str.length ; i++) {
        if (word < str[i].length) {
            word = str[i].length;
            longest = str[i];
        
        }

    }
    return longest;
}
