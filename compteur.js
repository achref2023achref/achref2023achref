var inc= document.getElementById('plus')
var dec= document.getElementById('minus')
var count=document.getElementById('counter')
var reset=document.getElementById('redémarrer')
var counter=0;
inc.addEventListener('click',function(){
    if(counter<10)
    {
        counter+=1
    }
    count.innerHTML=counter
})
dec.addEventListener('click',function(){
    if(counter>0)
    {
        counter-=1
    }
    count.innerHTML=counter
})
reset.addEventListener('click',function(){
    counter=0
    count.innerHTML=counter
})
"C:\Users\chlio\OneDrive\Bureau\work shop\portfolio\portfolio1.html"

