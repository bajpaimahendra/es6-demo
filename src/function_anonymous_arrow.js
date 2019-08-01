/* 
 
 --- Anonymous(unknown name) or Fat Arrow Function ---
 
 ( param1, parma2,…paramn )=> {       
 //code block 
 }
 
 benifit of arrow function ?
 
 */

//--------- Empty parentheses for no parameter -------------------

//    var msg = () => {
//        console.log("function invoked")
//    }
//    msg()

//----------- Optional parentheses for a single parameter.-------------

//    var msg = x => {
//        console.log(x)
//    }
//    msg(10)

//----------------- Optional braces for a single statement ---------


//    var disp = () => console.log("Hello World")
//    disp();
//    var foo = (x) => 10 + x
//    console.log(foo(10))


//-----------------------------------------------------------------

//    var sum = (x, y) => {
//        return x + y
//    }
//    let v = sum(1, 2);
//
//    console.log('addition of 1 and 2 =', v);

//-------------------- rest parameters and arrow function ----------

var sum = (...args) => {
    console.log(args);
    let total = 0;
    for (const a of args) {
        total += a;
    }
    return total;
}

var total = sum(1, 2, 3, 4,1);
console.log('sum is ', total);










