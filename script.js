let inn=document.querySelector(".inn");
let he=document.querySelector(".he");
let imm=document.querySelector(".imm")
let all=document.querySelector(".all")
imm.addEventListener('click', function(){
  all.innerHTML=' ';
  inn.value=''
});
inn.addEventListener("keydown",function(event){
 if(event.key=='Enter'){
    createelem()
 }
});
function createelem(){
    let h2=document.createElement('h2');
    h2.innerHTML='-'+inn.value;
    inn.value=''

    h2.addEventListener('click' ,function(){
        h2.style.textDecoration="line-through"
    })
    all.insertAdjacentElement('beforeend',h2);
}