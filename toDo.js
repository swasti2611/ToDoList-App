let inputBox=document.querySelector(".inputContainer");
let ulList=document.querySelector(".list");

let addBtn=document.querySelector(".addButton");

addBtn.addEventListener('click',(e)=>{
   console.log(e);
   addList(inputBox.value)
   inputBox.value = ''
    
 
});


const addList=(item)=>{
   let newList=document.createElement("li");
   newList.innerHTML= `
   ${item} 
   <i class="fas fa-times remove-icon"></i>
   `;

     newList.addEventListener("click",()=>{
      newList.classList.toggle("done")
     })
   ulList.appendChild(newList);
   newList.querySelector("i").style.float="right";
  
   newList.querySelector("i").addEventListener("click",()=>{
   newList.remove();
   })

 
}

