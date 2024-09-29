let started=false;
let h3=document.querySelector("h3");
let level=0;

let gameSeq=[];
let userSeq=[];

let btn=["yellow","red","green","blue"];

document.addEventListener("keypress", function()
{
    if(started==false){ 
    console.log("Game Started");
     started=true;

    levelup();
    }
});

function levelup()
{
    userSeq=[];
    level++;
    h3.innerHTML = ('Level ' + level);
    let randIdx=Math.floor(Math.random()*4); 
    let randcolor=btn[randIdx];
   let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor); 
    btnFlash(randbtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function checkans(index)
{

     
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(levelup,1000);
        }
      
      else{
        let btn=document.querySelector("body");
        btn.classList.add("alert");
        setTimeout(function(){
        btn.classList.remove("alert")
    },250);
        h3.innerHTML=`Game Over ! Your score was ${level} <br> Press any key to start`;
        reset();
      }
} 
function btnpress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkans(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(let  btn of allbtn)
{
    btn.addEventListener("click",btnpress);
}     

function reset()
{
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
  
}


