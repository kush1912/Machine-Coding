// Call, Apply, Bind
/*

All the three methods are ways of sharing with different objects.
Call: Function Borrowing from one object to another.

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

printName.call(name2, "India", "UP");

//Apply is same but only differen