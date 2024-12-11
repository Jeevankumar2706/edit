let div1=document.getElementById("div1")
let div2=document.getElementById("div2")
let sub1=document.getElementById("sub1")

let para=document.getElementById("para")

sub1.addEventListener("click",()=>{
    
    let sum=para.value 
    // console.log(sum);
    
   
    for(i=1;i<=sum;i++){
        
         let p=document.createElement("p")
         p.setAttribute("class","par")
         div1.appendChild(p)
         p.textContent=i+". paragrah "  
         console.log(p)  

    }

    div2.style.display="block"
   
   
})


let sub2=document.getElementById("sub2")
let edit=document.getElementById("edit")

sub2.addEventListener("click",()=>{
    
    let sum1=edit.value
    // console.log(sum1);

    let content=prompt("enter the content");

    let paragrah=document.getElementsByClassName("par")
    // console.log(paragrah);
   

    for(i=0;i<paragrah.length;i++){
       if(i+1 == sum1){
        
        paragrah[i].textContent=(i+1)+"."+ content

       }
    }
    
  
    
})