const container=document.querySelector("#container");

let num=16;

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

// function mouseHandler(){
//     let color=randomColorGenerator();
//     grid.style.backgroundColor=color;
//     grid.removeEventListener('mouseover',mouseHandler)
// }
CreateGrid(num);