let boxes=document.querySelectorAll(".box");
let msgs=document.querySelector(".msgs");
let resetbtn=document.querySelector(".resetbtn");

turn0=true;

const winnerpatern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [0,1,2],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [2,5,8],
    
];

const resetgame=()=>{
    turn0=true;
    msgs.innerText="let`s play";
    enbbut();
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("this is clicked");
      if(turn0){
        box.innerText="o";
        turn0=false;
      }else{
        box.innerText="x";
        turn0=true;
      }
        box.disabled=true;
         checkwinner();
    
     });
});



let disbut=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}

let enbbut=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";

    }
}

let showwinner=(winner)=>{
    msgs.innerText= `congrats you win ${winner}`;

    disbut();
}

let checkwinner = () =>{
    for( let pattern of winnerpatern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val !=""  && pos3val !=""){

            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
              showwinner(pos1val);
            } 
        }

    }

}

resetbtn.addEventListener("click",resetgame);
