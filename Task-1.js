//Task1

console.log('if both the arguments are same we print empty String because => 1-1=0')
var str="Chandu"
var resultSlice=str.slice(1,1);//return empty string
var resultSubstring=str.substring(1,1);//return empty string
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

console.log('only first index is ignored')
var resultSlice=str.slice(1);//handu 
var resultSubstring=str.substring(1);//handu
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

console.log('1>4 then 4-1=3, then in 4 indexes - Chand=> we get 3 indexes - han ')
var resultSlice=str.slice(1,4);//han //4-1=3
var resultSubstring=str.substring(1,4);//han 4-1=3
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

console.log('return empty string because 4>1 is not possible in slice')
var resultSlice=str.slice(4,1);//return empty string because 4>1 is not possible in slice
console.log('In the substring they swap places and occurs a substring')
var resultSubstring=str.substring(4,1);//han//4-1=3//In the substring they swap places and occurs a substring
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

console.log('Slice supports negative values ')
var resultSlice=str.slice(4,-1);//d //-1-4=5
console.log(`Substring doesn't supports negative values`)
var resultSubstring=str.substring(4,-1);//chan // the negative values are corresponded as '0' in substring =>4-0=4
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

var resultSlice=str.slice(4,-1);//d //-1-4=5
var resultSubstring=str.substring(4,-1);//chan // the negative values are treated as '0' in substring =>4-0=4
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);


var resultSlice=str.slice(4,"Jack");//EMPTY string
var resultSubstring=str.substring(4,"Jack");//chan // the string values are treated as '0' in substring =>4-0=4
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

var resultSlice=str.slice(-1,3);//empty string
var resultSubstring=str.substring(4,"Jack");//chan // the string values are treated as '0' in substring =>4-0=4
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);

var resultSlice=str.slice(-1,23);//u//0-1=-1//highest number is also considered as string length and
var resultSubstring=str.substring(4,23)//du//0-4=-4;
console.log("Slice",resultSlice);
console.log("Substring",resultSubstring);


//Task2

var str="Captian Jack Sparrow.";

var result=str.split('');
console.log(`Character Length -`,result.length);
var result1=str.split(' ');
console.log(`Word Length -`,result1.length);

//Task 3
console.log('Convert string to array')
var str="Praveen Kumar";
console.log(str.split(''))

console.log('Convert array to string')
var array=[1,2,3,4,5,6];
console.log(array.toString())

console.log('hyphens b/w each index')
var array=[1,2,3,4,5,6];
console.log(array.join('-'))

//Task 4
console.log('Take a Phone number as a array add +1 to each Digit')
debugger;
var phone='9440667351';
number=phone.split('');
console.log(number);
for(i=0;i<number.length;i++){
let phonenumber=(Number(number[i]))+1;
    console.log(phonenumber)
}