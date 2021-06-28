/*****
Code output

\'  single quote
\"  double qoute
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

*****/

//local variables have preference over the global variable when function is called.
var temp = "global";

function fun(){

      var temp = "local";
      return temp;

}

console.log(fun());    // it prints local.
console.log(temp);   // it prints global.

//

var testarr = [1,2,3,4,5];

console.log("before:"+JSON.stringify(testarr));     //converting array into string
console.log(testarr.shift());          //prints the first element.
console.log("After:"+JSON.stringify(testarr));

//
var mystr = "first line\n\\second line\n\bthird line";

console.log(mystr);
console.log(mystr.length);

//array of arrays

var myarr = [["temp",7],["rand",6]];
myarr[2] = ["addition",100];
console.log(myarr[2]);


//myarr.push(arr1);  --> push arr1 at the end
//myarr.pop();  --> remove last elment from array.
//myyarr.shift() -->remove first element from array and return it.
//myarr.unshift("----")  --> addition of element at starting of array.

