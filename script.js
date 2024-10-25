// declaration of variables
const messages=document.getElementById("msg")
const buttons=document.querySelectorAll(".btns");
const restatbtn=document.querySelector(".restart");
const gamebtn=document.querySelectorAll(".gamebtn")
let player1=true;
let player2=true;



// function to change player turn
buttons.forEach((button)=>{
  button.addEventListener("click",(e)=>{
  
    if(button.innerText ===""){
      if(player1){
        e.target.innerText=`x`
        player1=false
       }else{
        e.target.innerText=`o`
        player1=true
       }
       
    }
     conditionToWin()
   
     
  })
  
  })

// conditins to  win the game
const winningCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function conditionToWin (){
 for (let condition of winningCondition) {
  
  let positionValue1 = buttons[condition[0]].innerText;
  let positionValue2 = buttons[condition[1]].innerText;
  let positionValue3 = buttons[condition[2]].innerText;
  
   if(positionValue1 !="" && positionValue2 !="" && positionValue3 != ""){
  
    let winner= positionValue1 == positionValue2 && positionValue2 == positionValue3
      if(winner){
        // messages.style.color="rgb(216, 135, 80)"
        messages.innerHTML=` <h2>Congratulation ${positionValue1} is the winner</h2>
                                     
        `;

        gamebtn.forEach((btn)=>{
           btn.disabled=true
        })
       
      }
     
    }
    
   }
 }
  

// code for restart button functionality

function restartgame(){
 gamebtn.forEach((btn)=>{
   
     btn.textContent=""
     btn.disabled=false;
   
  })
}
restatbtn.addEventListener("click",()=>{
  restartgame()
  messages.textContent=""
}
)