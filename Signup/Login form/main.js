let input1=document.querySelector("#Email");
let input2=document.querySelector("#password");
let label1=document.querySelector("#label1");
let label2=document.querySelector("#label2");


input1.addEventListener('focus',()=>{
    if(input1.value==''){
        label1.style.top="10px";
    }
})
input2.addEventListener('focus',()=>{
    if(input2.value==''){
        label2.style.top="10px";
    }
})



