// limiting the rate of execution for that function call
// Performance Optimization

let counter=0;
// document.getElementById('myid').addEventListener('click',()=>{
//     console.log('Button Clicked!' + counter++);
// })

function clickButton(){
    console.log('Button Clicked!' + counter++);
}

function resizeWindow(){
    console.log('Window Resizing!');
}
// Pollyfill
const throttle =(fname, limit)=>{
    let flag=true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            fname.apply(context, args); // you can call normally or by using apply.
            flag=false;
            setTimeout(()=>{
                flag=true;
            },limit);
        }
        
    }
}


const betterClickFunction = throttle(clickButton, 4000);
const betterLoggerFunction = throttle(resizeWindow,4000);
document.getElementById('myid').addEventListener('click',betterClickFunction);
window.addEventListener("resize",betterLoggerFunction);


/*
Difference between throttle and Debouncing
function call between difference between two keystroke events
 -  search bar
function call after some time limit
- resizing 
 */