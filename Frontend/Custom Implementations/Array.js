
//Custom Implementation of slice and Splice


//Custom Implementation of Filter
/*
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

Array.prototype.myFilter = function(fname){
    let arr=[];
    for(const item of this){
        if(fname(item)) // callback function returns true or false value.
        arr.push(item);
    }
    return arr;
}
const result = words.filter(word => word.length > 6);
const res =  words.myFilter(word=>word.length>6);
console.log(result);
console.log(res);
*/

//Custom Implementation of Reduce
/*
The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
*/
/* 
let nums= [1,2,3,4,5];

Array.prototype.myReduce = function(fname, res){
    let i=0;
    if(res===undefined){
    res = this[i++];
    }
    for(;i<this.length;i++){
        //previousValue, currentValue, currentIndex, array
        res=fname(res,this[i],i, this);
    }
    return res;
}
// let res =  nums.reduce((a,b)=>a+b); // 15
let newNums =  nums.myReduce((a)=>a);
console.log(newNums);
*/


//Custom Implementation of Map
/*
let nums= [1,2,3,4,5];
Array.prototype.myMap = function(fName){
    let arr=[];
    for(const item of this){
        arr.push(fName(item));
    }
    return arr;
}

//let newNums = nums.map((a)=> a*2);
let newNums = nums.myMap((a)=> a*2); //[ 2, 4, 6, 8, 10 ]
console.log(newNums);
*/


// Flattening of Array or Objects - Same Code
/*
const arr = [1,2,[3, [4,5],[6,7], 8, 9],10]; // 1,2,3,4,5,6,,7,8,9,10
const flatten = (arr,newArr=[])=>{
    for(const item of arr){
        if(item instanceof Object){
            flatten(item, newArr);
        }
        else{
            newArr.push(item);
        }
    }
    return newArr;
}
console.log(flatten(arr));
*/