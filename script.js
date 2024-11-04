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
        grid.style.float='left';
        grid.style.boxSizing = 'border-box';
        container.appendChild(grid);
    }
}
CreateGrid(num);