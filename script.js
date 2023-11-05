const inputBox= document.getElementById("input-box");
const idContainer= document.getElementById("id-container");
function addItem(){
    if(inputBox.value===''){
        alert("you must write someting");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        idContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
}
idContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("ceaked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);