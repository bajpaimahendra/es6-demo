/*  --- Anonymous(unknown name) Function ---
 * 1-Functions that are not bound to  name
 * 2-Variables can be assigned an anonymous function
 * 3- var res = function( [arguments] ) { ............ } 
 */


var fun = function () {
    return 'Hello';
}
console.log(fun());


//---------------- paramererized -------------------------------------

var func = function(x,y){ return x*y }; 
function product() { 
   var result; 
   result = func(10,20); 
   console.log("The product : "+result) 
} 
product()

//----------- Recursion -------------------------------------------

function factorial(num) { 
   if(num<=0) { 
      return 1; 
   } else { 
      return (num * factorial(num-1)  ) 
   } 
} 
console.log('factorial ',factorial(6)) 


//----------- Anonymous Recursive i.e. function calls itself using a pair of parentheses ().  --------


(function() { 
   var msg = "Hello World";
   console.log(msg);
})();


