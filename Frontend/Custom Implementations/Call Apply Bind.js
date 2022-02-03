// Call, Apply, Bind
/*

All the three methods are ways of sharing functions with different objects.
Call: Function Borrowing from one object to another.

By default all these methods are available to all the functions.

*/
let name={
    firstName:"John",
    lastName:"Doe",

    //Generally fn are not written here. 
    // printName(){
    //     //here this refers to this name object.
    //     console.log(this.firstName+" "+this.lastName);
    // } 
}

//Function are generally written outside like this.
printName = function(country, state){
    //here this refers to the object with which it is being binded.
    console.log(this.firstName+" "+this.lastName+" "+country+", "+state);
}

// name.printName();

let name2={
    firstName:"Radha",
    lastName:"Sharma",
}
//name.printName.call(name2);
printName.call(name, "Canada", "Toronto");

// Additional parameters can also be passed in the same way.
printName.call(name2, "India", "UP");

//Apply is same but only difference is between calling methods.
//a list of parameters is passed instead of individual parameters.
printName.apply(name,["India", "Kerala"]);

//While the Bind function doesn't call the function directly but
// it binds the method with that object and returns us the copy of that function

let printFullName = printName.bind(name2,"India","Delhi");
console.log(printFullName);
printFullName();