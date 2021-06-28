let num = 9;
let str = "9";

//'===' also checks the datatype not only value.
if(num === str){
    console.log("true");
}
else{
    console.log("false");
}

// && -->and operator , or operator
// ! negation condition--> reverse the result. 


var obj = {x:2,y:3,z:4};

const{x:a, y:b, z:c} = obj  //assigning content of object to a,b,c. 
