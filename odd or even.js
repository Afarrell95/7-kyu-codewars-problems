// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
    //enter code here
   if(array == ''){
     return "even"
   }
   let sum = array.reduce((a,b)=> a + b);
   
   if(sum % 2== 0){
     return "even"
   }else{
     return 'odd'
   }
 }