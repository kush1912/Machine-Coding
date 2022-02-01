// Event Bubbling
// Event Capturing/Trickling down

// addEventListener(eventNam, CallBackFunction, true/false)
//true -  capture, false - bubble(default)
// Event Delegation


window.onload=function(){
    document.querySelector('#grandparent').addEventListener('click',()=>{
        console.log('GrandParent!');
    });
    
    document.querySelector('#parent').addEventListener('click',()=>{
        console.log('Parent!');
    },true);// capturing
    
    document.querySelector('#child').addEventListener('click', ()=>{
        console.log('Child!');
    })
  }
