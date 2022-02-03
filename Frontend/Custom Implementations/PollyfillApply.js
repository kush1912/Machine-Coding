let name={
    firstName:"John",
    lastName:"Doe"
}

printName = function(country, state){
    console.log(this.firstName+" "+this.lastName+" "+country+", "+state);
}

printName.call(name, "India", "UP");

Function.prototype.myCall = function(obj,...args){
    console.log(this); //[Function: printName]
    console.log(obj);  //{ firstName: 'John', lastName: 'Doe' }
    obj.fnRef = this;
    console.log(obj);
    obj.fnRef(...args);
}
printName.myCall(name, "India", "UP");
