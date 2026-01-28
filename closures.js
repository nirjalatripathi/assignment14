//Topic 2: JavaScript Closures
//1. Basic Closure
function outerFunction() {
    let text="Hello";
    function innerFunction() {
        console.log(text);
    }
    //Returning the inner function
    return innerFunction;
}
//Storing returned function
const result=outerFunction();
result(); // calling the returned function 

//2. Closure with Counter
function outer() {
    let count=0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
}
const counter= outer();
counter();
counter();
counter();

//3. Data Privacy Using Closures
function private() {
    let priv="PRIVATE";
    function getpriv() {
        return priv;
    }
    // function to update value
    function setpriv(newValue) {
        priv= newValue;
    }
    // Function returning
    return {
        getpriv,
        setpriv
    };
}
    //Creating object
    const box= private();
    // Accessing private data 
    console.log(box.getpriv());
    box.setpriv("UPDATED PRIVATE");
    console.log(box.getpriv());

//4. Closures with loop
let funcn=[];
// loop using let
for (let i=0; i<4; i++) {
    funcn.push (function() {
        console.log(i);
    });
}
// calling each funcns
funcn[0]();
funcn[1]();
funcn[2]();
funcn[3]();
