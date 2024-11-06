const container=document.querySelector("#container");
const Value=document.querySelector('#textfield');
const Multi=document.querySelector("#multi");
const Black=document.querySelector("#Black");
const submit=document.querySelector("#submit");
const validate=document.querySelector("#validate");
let color;
let opacity=0;
// let number;
let ColorPicker=true;

Multi.addEventListener('click',()=>{
    ColorPicker=true;
    
})
Black.addEventListener('click',()=>{
    ColorPicker=false;
    
})

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    validate.textContent="";
    num=parseInt(getNumberOfGrids());
    if(!isNaN(num) && num>=4 &&num<=120){
        resetColor();
        CreateGrid(num);
        opacity=0;
    }
    else{
        validate.textContent="Please pick a number between 1 and 120";
    }
   
})



let num=8;
let reset=document.querySelector("#reset");
reset.addEventListener('click',()=>{
    resetColor();
    CreateGrid(num);
})

function CreateGrid(num){
    container.innerHTML='';
    let size=container.clientHeight/num;
  
    for(let i=1;i<=num*num;i++){
        let grid=document.createElement('div');
        grid.className="grid";
        grid.style.height=`${size}px`;
        grid.style.width=`${size}px`;
        grid.style.border = "1px solid black";
        
        grid.style.boxSizing = 'border-box';

      const mouseHandler=()=>{
        if(ColorPicker){
            let color=randomColorGenerator();
            grid.style.opacity=opacity.toString();
            opacity+=0.1;
        }
        else{
            color="#000000";
        }
        grid.style.backgroundColor=color;
        grid.removeEventListener('mouseover',mouseHandler);
      }
      grid.addEventListener('mouseover',mouseHandler);
        container.appendChild(grid);
    }   
}

function randomColorGenerator(){
    let options="0123456789ABCDEF";
    color="#";
    for(let i=0;i<6;i++){
        color+=options[Math.floor(Math.random()*16)];
        
    }
    return color;

}
function resetColor(){
    let allGrids=document.querySelectorAll(".grid");
    for(let grid of allGrids){
        grid.style.backgroundColor='white';
    }
    
}

function getNumberOfGrids(){
    const input=document.querySelector("#textfield");
    return input.value;
}

// function mouseHandler(){
//     let color=randomColorGenerator();
//     grid.style.backgroundColor=color;
//     grid.removeEventListener('mouseover',mouseHandler)
// }
CreateGrid(num);