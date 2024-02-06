let turn=1;
let boxList=document.querySelectorAll(".a");
let text=document.querySelector("p");
for(let box of boxList){

        box.addEventListener("click",()=>{
            if(turn===1){
                box.innerText="X";
                box.disabled=true;
                turn=2;
                text.innerText="ITS PLAYER 2'S TURN";

            }
            else{
                box.innerText="O";
                box.disabled=true;
                turn=1;
                text.innerText="ITS PLAYER 1'S TURN";
            }
        })
    }


