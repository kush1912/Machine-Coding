let name ={
    firstName:"John",
    lastName:"Doe",
}

printName = function(country, state){
    console.log(this.firstName + " " + this.lastName + " " + country + ", " + state);
}

// let printFullName = printName.bind(name,"Pakistan");
// printFullName("Kabul");


// Bind function returns the function but does not call it.

Function.prototype.myBind = function(...args){
    console.log(this);  // [Function: printName]
    console.log(args);  // [ { firstName: 'John', lastName: 'Doe' }, 'India' ]
    
    let obj = this;
    // will exclude the first element since its baiscally a reference to teh function to the object
    params = args.slice(1) 
    return function(...args2){      // second function could also have parameters.
        obj.apply(args[0], [...params,...args2]);  //Spread operator
    }
}

// let printFullName2 = printName.myBind(name,"India");
// printFullName2("MP");

Function.prototype.customBind = function(obj,...args) {
    obj.fnRef = this;
    return function (...args2) {
        obj.fnRef([...args, ...args2]);
    }
}


let printFullName3 = printName.customBind(name,"India");
printFullName3("GOA");