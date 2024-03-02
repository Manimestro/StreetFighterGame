let EnterButton=document.getElementById("EnterButton");
let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let input1=document.getElementById("input1");
let input2=document.getElementById("input2");
let player1=document.getElementById("player1");
let player2=document.getElementById("player2");
let score1=document.getElementById("score1");
let score2=document.getElementById("score2");
let simulation=document.getElementById("simulation");
let reset=document.getElementById("reset");
let result=document.getElementById("result");
let starter=null;
let name1=null;
let name2=null;
let s=true;
class player{
    constructor(){
        this.health=100;
        
    }
    punch(anmy){
        let attack=Math.ceil(Math.random()*10)
        if (anmy.health<attack){
            anmy.health=0
            }
        else{
            anmy.health-=attack
            }
    }
 
    heal(me){
        let hp=Math.floor(Math.random()*10)
        if (me.health>=100-hp){
        me.health=100
        }
        else{
            me.health+=hp 
        }
    }
  reset(me,anmy){
    me.health=100
    anmy.health=100
  }
  output(){
    return([p1.health,p2.health])
  }
}
let p1=new player()
let p2=new player()
let music=()=>{
    nums=Math.floor(Math.random()*3)
    document.getElementById(`${nums}`).play()
   
}

let ret=()=>{
    name1=input1.value
    name2=input2.value
    console.log(name1,name2)
    document.body.removeChild(div1)
    div2.classList.remove("d-none")
    music()
    
    if (name1==""){
        name1="Player 1"
    }
    if (name2==""){
        name2="Player 2"
    }
    player2.innerText=name2
    player1.innerText=name1
    document.addEventListener("keydown",starto)

}

EnterButton.addEventListener("click",ret)

const starto1=(event)=>{
    if (event=="q" || event=="p" ){
        document.getElementById("punch").play()
        if (event==="q"){
        p1.punch(p2)
        vals=p1.output()
        a=vals[0]
        b=vals[1]
        score1.innerText=a;
        score1.style.color="white"
        score2.innerText=b;
        score2.style.color="white"
        }
        if (event==="p"){
            p2.punch(p1)
            vals=p1.output()
            a=vals[0]
            b=vals[1]
            score1.innerText=a;
            score1.style.color="red"
            score2.innerText=b;
            score2.style.color="red"
            }
        
    }
    if (event=="l" || event=="a"){
        document.getElementById("heal").play()
        if (event==="l"){
            p2.heal(p2)
            vals=p1.output()
            a=vals[0]
            b=vals[1]
            score1.innerText=a;
            score2.innerText=b;
            score2.style.color="green"
            }
            if (event==="a"){
                p1.heal(p1)
                vals=p1.output()
                a=vals[0]
                b=vals[1]
                score1.innerText=a;
                score1.style.color="green"
                score2.innerText=b;
                
                }
    }   
    if (a===0){
        document.getElementById("victory").play()
        result.innerText=`${name2} Won`
        result.style.color="red"
        s=false
        
        
    }
    if (b===0){
        document.getElementById("victory").play()
        result.innerText=`${name1} Won`
        result.style.color="white"
        s=false
    }
}

let starto=(event)=>{

    ourkey=event.key
    starto1(ourkey)
}    
    


console.log(starter)
reset.addEventListener("click",()=>{
    score1.innerText=100;
    score2.innerText=100;
   p1.reset(p1,p2)
    result.innerText=""
    s=true
    score1.style.color="black"
    score2.style.color="black"

})
simulation.addEventListener("click",()=>{
    console.log(`------------------`)
    while (s===true){
        let l=["p","l","q","a"]
        ev=l[Math.floor(Math.random()*4)]
        
        console.log(` simkey  ${ev}`)
        starto1(ev)
}
   
}
)