let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let but=document.querySelector("button");


but.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let b=document.createElement("button");
    b.innerText="Delete";
    b.classList.add("del");
    

    item.appendChild(b);
    ul.appendChild(item);

    console.log(inp.value);
    inp.value="";
    
});

let but2=document.querySelectorAll(".del");

ul.addEventListener("click",function(event){
  console.dir(event.target.nodeName);
  if(event.target.nodeName=="BUTTON"){
    let v=event.target.parentElement;
    v.remove();
    console.dir(v.outerText);
   
  }
});

