// creates an explicit block { let b, c; .. } , will help in code refactor large code and undersatnd

if (1) {
    // more code

    // make an explicit scope block!
    { let b=1, c;
        // more code

        b = 10;

        // more code

        c = 20;

        // more code

        if (b > 3) {
            // more code

            console.log( b + c );    // b is available here

            // more code
        }
    }

    // more code
}

/*
 --- "let block form" ----------------------
It may come in later, or never, but it's definitely not in ES6.
Perhaps not. it needs  a tool called "let-er", which is a transpiler for "let block form" code. By default
*/

/*


if (1) {
    // make an explicit scope block!
    let (b=1, c) {
        b = 10;
        c = 20;
        if (b > 3) {
            // more code

            console.log( b + c );    // b is available here

            // more code
        }
    }
}

*/


