function caseSwitch(num){

     var answer = "";

     switch(num){

           case 1: 
              answer  += "1st case";
              //break;
           case 2:
              answer += "2nd case";
              //break;
           case 3:
              answer += "3rd case";
              //break;
            default:
              answer += "default case";
     }

     return answer;
}



console.log(caseSwitch(5));



//return booloean

function isBoolean(a,b){

      return a<b;
}

console.log(isBoolean(20,10));

