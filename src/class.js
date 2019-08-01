/*
 * It is not mandatory to include a constructor definition. 
 * Every class by default has a constructor
 * A class body can only contain methods, but not data properties.
 * 
 */
'use strict'
class Polygon {
    constructor(height, width) {
        this.h = height;
        this.w = width;
    }
    test() {
        console.log("The height of the polygon : ", this.h);
        console.log("The width of the polygon  : ", this.w);
    }
}

//creating an instance  
var polyObj = new Polygon(10, 20);
polyObj.test();

///--- Static ----------------------------------------------------------------

/*
 * Static members are referenced by the class name.
 * 
 */

'use strict'
class StaticMem {
    static disp() {
        console.log("Static Function called");
    }
}
StaticMem.disp(); //invoke the static metho


///--- Inheritance -------------------------------------------------------------

/*
 * support only single inheritance.
 * doesn’t support multiple inheritance.
 */

'use strict'
class Shape {
    constructor(a) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the circle:  " + this.Area)
    }
}
var obj = new Circle(223);
obj.disp()

///---------- Method Overriding -----------------------------------------------

/*
 * redefines the superclass method.
 */


/*
 
 class PrinterClass {
 doPrint() {
 console.log("doPrint() from Parent called… ");
 }
 }
 class StringPrinter extends PrinterClass {
 doPrint() {
 console.log("doPrint() is printing a string…");
 }
 }
 var obj = new StringPrinter();
 obj.doPrint();
 
 */



///---  Super Keyword ----------------------------------------------------------

/*
 * The super keyword is used to call the member of  immediate parent class.
 */

'use strict'
class PrinterClass {
    doPrint() {
        console.log("doPrint() from Parent called…");
    }
}
class StringPrinter extends PrinterClass {

    doPrint() {
        super.doPrint();
        console.log("doPrint() is printing a string…");
    }
}
var obj = new StringPrinter();
obj.doPrint();

///--  Inheritance -------------------------------------------------------

