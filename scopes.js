//Topic 1: JavaScript Scopes
//1. Global Scope
let x=10;
function show() { // function declaration 
    console.log(x);
}
show(); // function call
if (true) {
    console.log(x);
}
console.log(x);

//2. Function Scope
function testFunction() {
    //variable declare using var
    var a=10;
    // variable declare using let 
    let b=15;
    // variable declared using const
    const c=20;
    console.log(a);
    console.log(b);
    console.log(c);
}
// calling the function 
testFunction();
// causes reference error
//console.log(a);
//console.log(b);
//console.log(c);

//3. Block Scope
if (true) {
    let x=10;
    const y=20;
    var z=30; // var is not block scoped 
    console.log (x);
     console.log (y);
      console.log (z);

}
//console.log(x); // error as x is block scoped
//console.log(y); // error as y is block scoped too 
console.log(z); // works as var is not block scoped 

// 4. Scope Chain
function outer() { // Parent scope variable
    let a=15;
    function inner() { // same scope variable
        let b =25;
        // Accessing variables
        console.log(a);
        console.log(b);
    }
    inner();
}
outer();

//5. Variable Shadowing
let value=50;
function test() {
    // Shadows the global variable
    let value=40;
    console.log(value);
}
//Function call
test();
console.log(value);
