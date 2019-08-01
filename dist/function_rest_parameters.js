/*
    1- rest parameters act as placeholders for multiple arguments of the same type.
    2- the parameter name is prefixed with three dots.
    3- rest parameter args will be stored in an array.
*/

function fun1(...params) {
    //console.log(params.length);
    console.log(params[2]);
}

//fun1();
//fun1(5);
//fun1(5, 6, 7); 

//----------------- Example 1 ----------------------------------------------

function fun2(a, b = 1, ...restParams) {
    console.log('a= ', a);
    console.log('b= ', b);
    console.log(restParams);
}

fun2(5, 6, 7, 'aa');

//----------------- Example 2 ----------------------------------------------

function sum(...args) {
    let total = 0;
    for (const a of args) {
        total += a;
    }
    console.log('sum = ', total);
    return total;
}

sum(1, 2, 3); // 6