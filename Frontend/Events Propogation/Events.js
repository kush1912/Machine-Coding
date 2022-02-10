// Event Bubbling
// Event Capturing/Trickling down

// addEventListener(eventNam, CallBackFunction, true/false)
//true -  capture, false - bubble(default)
// Event Delegation: Instead of adding event handlers to every html component we should attach it to the parent of
//  the html components, by using the conecpt of event bubbling. 


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

    document.querySelector("#category").addEventListener('click',(e)=>{
        console.log(e.target.id);
        //the check is required cause many other tags could have same ids  
        if(e.target.tagName=='LI'){
            window.location.href='/'+e.target.id;
        }
    });

    document.querySelector('#form').addEventListener('keyup',(e)=>{
        console.log(e);
        if(e.target.dataset.uppercase!=undefined){
            e.target.value = e.target.value.toUpperCase();
        }
    })
  }
