const container=document.querySelector("#container");
const Value=document.querySelector('#textfield');

const submit=document.querySelector("#submit");
// let number;

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    num=parseInt(getNumberOfGrids());
    resetColor();
    CreateGrid(num);
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
        let color=randomColorGenerator();
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