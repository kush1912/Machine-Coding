let counter=0;
const getData = () => {
    console.log("Fetching Data..."+ counter++);
}

const debounce = (fname, delay)=>{
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fname(...args);
        },delay);
    }
}

const betterfunction=debounce(getData,500);
