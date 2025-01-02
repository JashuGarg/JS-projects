const btns = document.querySelectorAll(".box")
const reset = document.querySelector("#reset-btn")

let Turnx = true ;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let count = 0

btns.forEach(function(button){
button.addEventListener("click",function(){
    if(Turnx){
      button.innerText = "X"
      Turnx = false
    }
    else{
      button.innerText = "O"
      Turnx = true
    }
    checkWinner()
})
})

function checkWinner() {
  for (let pattern of winPatterns) {
    let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[2]].innerText;
console.log(pos1Val);
console.log(pos2Val);
console.log(pos3Val);

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
       if(Turnx){
        alert("O Won The Game")
       }else{
        alert("X Won The Game")
       }
       
        return true;
      }
    }
  }
};

function resetgame (){
  btns.forEach(function(button){
button.innerHTML = ""
turnx = true
  })
}

reset.addEventListener("click",resetgame)