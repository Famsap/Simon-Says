let gameseq =[];
let userseq = [];
let btns = ["yellow", "red", "green", "pink"];

let level = 0;
let started = false;
let highscore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
  if(started === false){
    console.log("Game Started");
    started = true;
    levelUp();
  }
});


function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  }, 1000);
};

function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  }, 100);
};

function levelUp(){
  userseq = [];
  level = level + 1;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randcolor = btns[randIdx];
  let randbtn = document.querySelector(`.${randcolor}`);
  gameseq.push(randcolor);
  console.log(gameseq);
  btnflash(randbtn);
};

function checkAns(idx){
  if(userseq[idx] === gameseq[idx]){
    if(userseq.length === gameseq.length){
      setTimeout(levelUp, 1000);
    }
    console.log("Success");
}else{
  if(level > highscore){
    highscore = level;
  h2.innerHTML = `Game Over, Press Any Key to Restart <br> Your Score: ${level} `;
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor = "white";
  }, 200);
  reset();
}
}
};

function buttonPress(){
  let btn = this;
  userflash(btn);
  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  // console.log(userColor);
  checkAns(userseq.length -1, highscore);
  }



let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
  btn.addEventListener("click", buttonPress);
};


function reset(){
  level = 0;
  gameseq = [];
  started = false;
  userseq = [];
}